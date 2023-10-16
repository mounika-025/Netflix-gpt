import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    currentPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addCurrentPlayingMovies: (state, action) => {
      state.currentPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addCurrentPlayingMovies, addPopularMovies, addTrailerVideo } =
  moviesSlice.actions;
export default moviesSlice.reducer;
