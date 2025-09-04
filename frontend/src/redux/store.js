import { configureStore } from "@reduxjs/toolkit";
import loginUserReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        loginUSer : loginUserReducer
    },
});