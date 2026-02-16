import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddToBookmark, addReadingTime }) => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 ml-5 mt-5">
      {blogs.map((i) => (
        <Blog
          handleAddToBookmark={handleAddToBookmark}
          addReadingTime={addReadingTime}
          key={i.id}
          x={i}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
