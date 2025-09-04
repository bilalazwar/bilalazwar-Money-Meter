import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const loginUserSlice = createSlice({
    name: "loginUser",
    initialState: initialState,
    reducers: {
        setLoginUser: (state, action) => { 
            state = action.payload;
            return state;
        }
    }
});

export const { setLoginUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;