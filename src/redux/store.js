import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducr from "./gptSlice";
import languageSliceReducr from "./languageSlice";

const store = configureStore({
    reducer: {
        user: userSliceReducer,
        movie: movieSliceReducer,
        gptSearch: gptSliceReducr,
        language: languageSliceReducr,
    }
})

export default store;