import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const GptSearchContainer = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="min-h-screen bg-cover"
          src={BACKGROUND_IMG_URL}
          alt="bg-logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;
