import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import TimingDisplay from "./TimingDisplay";
import FullScreenToggle from "./FullscreenToggle.tsx";

interface ControlsProps {
    isPlaying: boolean;
    togglePlayPause: () => void;
    progress: number;
    onSeek: (value: number) => void;
    volume: number;
    onVolumeChange: (value: number) => void;
    toggleMute: () => void;
    isFullScreen: boolean;
    toggleFullScreen: () => void;
    currentTime: number;
    duration: number;
    showControls: boolean;
}

const Controls: React.FC<ControlsProps> = ({
                                               isPlaying,
                                               togglePlayPause,
                                               progress,
                                               onSeek,
                                               volume,
                                               onVolumeChange,
                                               toggleMute,
                                               isFullScreen,
                                               toggleFullScreen,
                                               currentTime,
                                               duration,
                                               showControls,
                                           }) => (
    <div
        className={`absolute bottom-0 left-0 right-0 px-2 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
            showControls ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
        <ProgressBar progress={progress} onSeek={onSeek} />
        <div className="flex justify-between mt-2 mb-2 items-center m-0">
            <div className="flex items-center space-x-4">
                <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
                <TimingDisplay currentTime={currentTime} duration={duration} />
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={toggleMute}>
                    {volume === 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 8l-8 8M8 8l8 8M19 5L5 19" />
                            <path d="M18 9a9 9 0 00-9 9" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3v18l-6-6H4a2 2 0 01-2-2V9a2 2 0 012-2h2l6-6z" />
                        </svg>
                    )}
                </button>
                <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />
                <FullScreenToggle isFullscreen={isFullScreen} toggleFullscreen={toggleFullScreen} />
            </div>
        </div>
    </div>
);

export default Controls;
