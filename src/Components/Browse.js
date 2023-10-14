import React from "react";
import Header from "./Header";
import useCurrentPlayingMovies from "../hooks/useCurrentPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useCurrentPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
