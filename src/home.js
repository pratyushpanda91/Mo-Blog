import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // [
  //   { title: "My new website", body: "lorem ipsum..", author: "omm", id: 1 },
  //   { title: "Portfolio", body: "lorem ipsum..", author: "praty", id: 2 },
  //   { title: "stopwatch", body: "lorem ipsum..", author: "panda", id: 3 },
  // ]
  // const [name, setName] = useState("omm");

  // const handleDelete = (id) => {

  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "panda")}
        title="MBJ Blogs!"
        handleDelete={handleDelete}
      /> */}
      {/* <button onClick={() => setName("praty")}>change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
