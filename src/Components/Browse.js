import React from "react";
import Header from "./Header";
import useCurrentPlayingMovies from "../hooks/useCurrentPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import GptSearchContainer from "./GptSearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useCurrentPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchContainer />
      ) : (
        <>
          <MainMovieContainer />
          <SecondaryMovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
