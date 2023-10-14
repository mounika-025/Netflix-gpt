import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black rounded-lg  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-white text-black rounded-lg border-2 border-red-900 focus:outline-none focus:border-red-700 placeholder-gray-500 placeholder-opacity-75 transition duration-300 ease-in-out"
          placeholder={lang[langSelector].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 border-2 border-none bg-gradient-to-r from-red-900 to-red-700 text-white rounded-lg flex items-center justify-center space-x-2 hover:from-red-500 hover:to-red-400 hover:text-white hover:shadow-md transition duration-300 ease-in-out text-xl">
          {lang[langSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
