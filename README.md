# react-video-player
**A smart react customized video player**

``Useage``
+ Like the html video tag

***

***
eg

```jsx
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

```


***Happy hacking***