import React from "react";
import Header from "./Header";
import useCurrentPlayingMovies from "../hooks/useCurrentPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useCurrentPlayingMovies();

  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
