import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieSuggetionResults: null,
    },
    reducers: {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults : (state, action) => {
            const {movieNames, movieSuggetionResults} = action.payload
            state.movieNames = movieNames
            state.movieSuggetionResults= movieSuggetionResults
        }
    }
})

export const {toggleGptSearchView, addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;