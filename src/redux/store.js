import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";

const store = configureStore({
    reducer: {
        user: userSliceReducer,
        movie: movieSliceReducer,
    }
})

export default store;