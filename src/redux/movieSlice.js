import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    popularMovies: null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatingMovies: (state, action) => {
      state.topRatingMovies = action.payload;
    },
    addUpCommingMovies: (state, action) => {
        state.upCommingMovies = action.payload
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addPopularMovies,
  addTopRatingMovies,
  addUpCommingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
