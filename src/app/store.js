/** @format */

import { configureStore } from "@reduxjs/toolkit";
import artikelReducer from "../features/artikelSlice";
import beritaReducer from "../features/beritaSlice";
import galeriReducer from "../features/galeriSlice";
export const store = configureStore({
  reducer: {
    artikel: artikelReducer,
    berita: beritaReducer,
    galeri: galeriReducer,
  },
});
