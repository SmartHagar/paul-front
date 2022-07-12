/** @format */

import instance from "../app/config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBerita = createAsyncThunk(
  // getBerita is the name of the thunk
  "berita/getBerita",
  async () => {
    const response = await instance.get("news");
    return response.data;
  }
);

const initialState = {
  berita: [],
  status: "success",
  error: null,
};

const beritaSlice = createSlice({
  name: "berita",
  initialState,
  extraReducers: {
    [getBerita.fulfilled]: (state, { payload }) => {
      return { ...state, berita: payload };
    },
  },
});

export const beritaSelector = (state) => state.berita.berita;
export default beritaSlice.reducer;
