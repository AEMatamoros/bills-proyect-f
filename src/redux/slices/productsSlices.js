import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsThunk,
  createBillThunk,
  getAllBillsThunk,
} from "../operations/fetchProductsOperations";

export const initialState = {
  serviceProducts: [],
  addedProducts: [],
  bills: [],
  billsCount: 0,
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.addedProducts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.serviceProducts = action.payload.map((p) => {
          p.product = p.id;
          return p;
        });
        state.loading = false;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(createBillThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBillThunk.fulfilled, (state, action) => {
        state.addedProducts = [];
        state.loading = false;
      })
      .addCase(createBillThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllBillsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBillsThunk.fulfilled, (state, action) => {
        state.bills = [...action.payload.results];
        state.billsCount = action.payload.count;
        state.loading = false;
      })
      .addCase(getAllBillsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

//Actions
export const { addProduct } = productsSlice.actions;
// Reducer del slice
export const productsReducer = productsSlice.reducer;
