/** @format */

import instance from "../app/config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGaleri = createAsyncThunk(
  // getGaleri is the name of the thunk
  "galeri/getGaleri",
  async () => {
    const response = await instance.get("galeries");
    return response.data;
  }
);

const initialState = {
  galeri: [],
  status: "success",
  error: null,
};

const galeriSlice = createSlice({
  name: "galeri",
  initialState,
  extraReducers: {
    [getGaleri.fulfilled]: (state, { payload }) => {
      return { ...state, galeri: payload };
    },
    [getGaleri.rejected]: (state, { error }) => {
      return { ...state, error };
    },
  },
});

export const galeriSelector = (state) => state.galeri.galeri;
export default galeriSlice.reducer;
