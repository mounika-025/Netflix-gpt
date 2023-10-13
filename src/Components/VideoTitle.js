import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video py-[20%] sm:px-20  px-4 bg-gradient-to-r from-black text-white">
      <h1 className="sm:text-4xl text-xl font-bold">{title}</h1>
      <p className="sm:w-[500px] w-[200px] line-clamp-2 sm:line-clamp-3 mt-3">
        {overview}
      </p>
      <div className="flex justify-start mt-4">
        <button className=" bg-white px-12 py-2 text-black font-medium flex items-center hover:opacity-80 rounded-lg">
          Play
        </button>
        <button className="mx-2 bg-gray-700 px-12 py-2 text-white font-medium flex items-center hover:opacity-80 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
