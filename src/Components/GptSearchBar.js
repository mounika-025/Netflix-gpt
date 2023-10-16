import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { useSelector, useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  console.log("OpenAI API Key:", process.env.REACT_APP_OPEN_API_KEY);

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error("Error fetching movie:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like example given ahead. Example result: gadar,sholey,Don,Golmaal,Koi mil gaya";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbMovieResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieResults: tmdbMovieResults,
          movieNames: gptMovies,
        })
      );
    } catch (error) {
      console.error("Error handling GPT search:", error);
    }
  };
  return (
    <div className="pt-[45%] md:pt-[15%]  flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black rounded-lg  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white text-black rounded-lg border-2 border-red-900 focus:outline-none focus:border-red-700 placeholder-gray-500 placeholder-opacity-75 transition duration-300 ease-in-out"
          placeholder={lang[langSelector].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 border-2 border-none bg-gradient-to-r from-red-900 to-red-700 text-white rounded-lg flex items-center justify-center space-x-2 hover:from-red-500 hover:to-red-400 hover:text-white hover:shadow-md transition duration-300 ease-in-out text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
