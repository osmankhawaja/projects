import React from "react";
import ShowBookmark from "./showBookmark";

const Bookmarks = ({ arr, time }) => {
  // arr and time are an object
  return (
    <div className="md:w-1/3 mr-5 ml-2 mt-5">
      <h2 className="text-blue-700 border-2 p-5 bg-gray-200 rounded-md font-bold">
        Spent Time on Read : {time} min
      </h2>
      <div className=" bg-slate-200 mt-5">
        <h2 className="font-bold ml-3 pt-5">Bookmarked Blogs:{arr.length}</h2>
        {arr.map((i) => (
          <ShowBookmark key={i.id} obb={i}></ShowBookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
