import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import { useState } from "react";

function App() {
  let [bookmark, setBookmark] = useState([]);
  let [time, setTime] = useState(0);

  let handleAddToBookmark = (a) => {
    let newBookmark = [...bookmark, a];
    setBookmark(newBookmark);
  };

  let addReadingTime = (a) => {
    let newTime = time + a;
    setTime(newTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          addReadingTime={addReadingTime}
        ></Blogs>
        <Bookmarks arr={bookmark} time={time}></Bookmarks>
      </div>
    </>
  );
}

export default App;
