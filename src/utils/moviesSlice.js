import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    currentPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addCurrentPlayingMovies: (state, action) => {
      state.currentPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addCurrentPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
