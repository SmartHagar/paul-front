/** @format */

import instance from "../app/config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArtikel = createAsyncThunk(
  // getArtikel is the name of the thunk
  "artikel/getArtikel",
  async () => {
    const response = await instance.get("articles");
    return response.data;
  }
);

const initialState = {
  artikel: [],
  status: "success",
  error: null,
};

const artikelSlice = createSlice({
  name: "artikel",
  initialState,
  extraReducers: {
    [getArtikel.fulfilled]: (state, { payload }) => {
      return { ...state, artikel: payload };
    },
  },
});

export const artikelSelector = (state) => state.artikel.artikel;
export default artikelSlice.reducer;
