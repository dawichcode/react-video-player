import {FC, MouseEventHandler} from "react";

interface  prop{
    isFullscreen:boolean,
    toggleFullscreen :MouseEventHandler<HTMLButtonElement> | undefined
}
const FullScreenToggle:FC<prop> = ({ isFullscreen, toggleFullscreen }) => {
    return (
        <button
            onClick={toggleFullscreen}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >{isFullscreen ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v4a2 2 0 004 0V4h3a2 2 0 100-4H4zm12 16a2 2 0 002-2v-4a2 2 0 10-4 0v4h-3a2 2 0 000 4h5zM4 18a2 2 0 002-2v-4a2 2 0 00-4 0v4a2 2 0 002 2zm12-8a2 2 0 00-2-2h-3a2 2 0 100 4h3a2 2 0 002-2z"
                    clipRule="evenodd"
                />
            </svg> :
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h6v6H4V4zm10 10h6v6h-6v-6zm6-10h-6v6h6V4zM4 14h6v6H4v-6z"
                />
            </svg>}
        </button>
    );
};

export default FullScreenToggle;
