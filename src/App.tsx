import VideoPlayer from "./components/VideoPlayer.tsx";
import {Poster, Video} from "./assets";

function App() {

  return (
    <>
     <div className={"w-8/12 "}>
      <VideoPlayer  src={Video}  poster={Poster}/>
     </div>
    </>
  )
}

export default App
