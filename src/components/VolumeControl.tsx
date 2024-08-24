import React from "react";

interface VolumeControlProps {
    volume: number;
    onVolumeChange: (value: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => (
    <div className="flex items-center space-x-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M9 3a1 1 0 00-.707.293L5.586 6H3a1 1 0 100 2h2.586l2.707 2.707A1 1 0 009 11V4a1 1 0 00-1-1zM13.293 4.293a1 1 0 00-1.414 1.414 3 3 0 010 4.242 1 1 0 001.414 1.414 5 5 0 000-7.07z"
                clipRule="evenodd"
            />
        </svg>
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="h-1 w-20 bg-white rounded cursor-pointer"
        />
    </div>
);

export default VolumeControl;
