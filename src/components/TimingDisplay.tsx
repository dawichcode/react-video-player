import React from "react";

interface TimingDisplayProps {
    currentTime: number;
    duration: number;
}

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
};

const TimingDisplay: React.FC<TimingDisplayProps> = ({ currentTime, duration }) => (
    <div className="text-white text-sm">
        {formatTime(currentTime)} / {formatTime(duration)}
    </div>
);

export default TimingDisplay;
