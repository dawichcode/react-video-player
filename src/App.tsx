import VideoPlayer from "./components/VideoPlayer";
import { Poster, Video } from "./assets";
import React from "react";

function App() {
  return (
    <>
      <div className={"w-8/12 "}>
        <VideoPlayer src={Video} poster={Poster} />
      </div>
    </>
  );
}

export default App;
