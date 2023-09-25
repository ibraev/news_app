import { createSlice } from "@reduxjs/toolkit";

const initialState  = {

}

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {}
})

export const {} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;