import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useCurrentPlayingMovies = () => {
  //fetched movie data from tmdb api and updating the store
  const dispatch = useDispatch();

  const currentPlayingMovies = useSelector(
    (store) => store.movies.currentPlayingMovies
  );
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addCurrentPlayingMovies(json.results));
  };

  useEffect(() => {
    !currentPlayingMovies && getMovies();
  }, []);
};

export default useCurrentPlayingMovies;
