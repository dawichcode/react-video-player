import React, { useRef, useState } from "react";

interface ProgressBarProps {
  progress: number;
  onSeek: (value: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onSeek }) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const seekTime = ((e.clientX - rect.left) / rect.width) * 100;
    onSeek(seekTime);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative rounded-md w-full h-1.5 bg-gray-600 cursor-pointer"
      ref={progressBarRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onClick={handleSeek}
    >
      <div
        className="absolute rounded-md top-0 left-0 h-full bg-red-600"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-1 h-3  w-3 bg-red-600 rounded-full transform -translate-y-1/2"
        style={{ left: `${progress - 0.3}%` }}
      />
    </div>
  );
};

export default ProgressBar;
