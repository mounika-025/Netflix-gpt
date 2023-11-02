import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.currentPlayingMovies);
  console.log(movies);
  if (!movies) return; //early return
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className=" pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
