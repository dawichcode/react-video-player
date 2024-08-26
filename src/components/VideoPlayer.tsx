/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState, useEffect } from "react";
import Controls from "./Controls";

interface VideoPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // @ts-ignore
  const controlTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        fastForward();
      } else if (e.key === "ArrowLeft") {
        rewind();
      } else if (e.code === "Space") {
        togglePlayPause();
        e.preventDefault();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10,
      );
    }
    resetControlTimeout();
  };

  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        videoRef.current.currentTime - 10,
      );
    }
    resetControlTimeout();
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    resetControlTimeout();
  };

  const handleProgress = () => {
    if (videoRef.current) {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100,
      );
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
      setProgress(value);
    }
    resetControlTimeout();
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
      if (value !== 0) {
        setPreviousVolume(value);
      }
    }
    resetControlTimeout();
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(previousVolume);
      if (videoRef.current) {
        videoRef.current.volume = previousVolume;
      }
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      if (videoRef.current) {
        videoRef.current.volume = 0;
      }
    }
    resetControlTimeout();
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
    resetControlTimeout();
  };

  const resetControlTimeout = () => {
    if (controlTimeoutRef.current) {
      clearTimeout(controlTimeoutRef.current);
    }
    setShowControls(true);
    controlTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  const handleMouseMove = () => {
    resetControlTimeout();
  };

  useEffect(() => {
    if (isPlaying) {
      controlTimeoutRef.current = setTimeout(
        () => setShowControls(false),
        3000,
      );
    }

    return () => {
      if (controlTimeoutRef.current) {
        clearTimeout(controlTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div
      className="relative bg-black w-full max-w-full"
      onMouseMove={handleMouseMove}
    >
      <video
        {...props}
        ref={videoRef}
        src={src}
        disablePictureInPicture={true}
        poster={poster}
        className="w-full"
        onTimeUpdate={(event) => {
          props.onTimeUpdate && props.onTimeUpdate(event);
          handleProgress();
        }}
        onClick={(_event) => {
          props.onClick && props.onClick(_event);
          togglePlayPause();
        }}
      />
      <Controls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        progress={progress}
        onSeek={handleSeek}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
        isFullScreen={isFullScreen}
        toggleFullScreen={toggleFullScreen}
        currentTime={currentTime}
        duration={duration}
        showControls={showControls}
      />
    </div>
  );
};

export default VideoPlayer;
