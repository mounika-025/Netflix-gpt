import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
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
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
