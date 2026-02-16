import React from "react";
import ribbon from "../assets/ribbon.png";

const Blog = ({ x, handleAddToBookmark, addReadingTime }) => {
  //destructure
  let {
    authorName,
    authorPic,
    title,
    coverPic,
    readingTime,
    postedDate,
    hashtags,
  } = x;
  return (
    <div>
      <img style={{ width: "890px", height: "400px" }} src={coverPic} alt="" />
      <div className="flex justify-between p-5">
        <div className="flex">
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            src={authorPic}
            alt=""
          />
          <div className="align-items ml-5">
            <p className="font-bold">{authorName}</p>
            <p>{postedDate}</p>
          </div>
        </div>
        <div className="flex">
          <p className="mr-2">{readingTime} min read </p>
          <img
            onClick={() => handleAddToBookmark(x)}
            className="w-5 h-5"
            src={ribbon}
            alt=""
          />
        </div>
      </div>
      <h2 className="text-lg font-bold"> {title}</h2>
      <div className="flex">
        {hashtags.map((i) => (
          <p className="mr-5 text-gray-500">{i}</p>
        ))}
      </div>
      <button
        onClick={() => addReadingTime(readingTime)}
        className="btn text-blue-700 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
