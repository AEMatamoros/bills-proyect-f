import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "../slices/productsSlices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
