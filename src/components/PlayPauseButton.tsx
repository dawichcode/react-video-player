import React from "react";

interface PlayPauseButtonProps {
    isPlaying: boolean;
    togglePlayPause: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, togglePlayPause }) => (
    <button onClick={togglePlayPause} className={"p-2 bg-black rounded-full"}>
        {isPlaying ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-white"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-white"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M14.752 11.168l-6.533-3.768A1 1 0 007 8.222v7.556a1 1 0 001.219.987l6.533-3.768a1 1 0 000-1.774z"/>
            </svg>
        )}
    </button>
);

export default PlayPauseButton;
