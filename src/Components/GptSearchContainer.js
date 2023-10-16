import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const GptSearchContainer = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="min-h-screen object-cover"
          src={BACKGROUND_IMG_URL}
          alt="bg-logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchContainer;
