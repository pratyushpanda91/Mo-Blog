import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum..", author: "omm", id: 1 },
    { title: "Portfolio", body: "lorem ipsum..", author: "praty", id: 2 },
    { title: "stopwatch", body: "lorem ipsum..", author: "panda", id: 3 },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "panda")}
        title="MBJ Blogs!"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
