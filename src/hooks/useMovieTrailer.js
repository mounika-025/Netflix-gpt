import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  console.log(trailerVideo);
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    if (json.results) {
      // Check if json.results is defined
      const filterTrailerData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterTrailerData.length
        ? filterTrailerData[0]
        : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } else {
      console.log("No trailer found");
    }
  };
  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
