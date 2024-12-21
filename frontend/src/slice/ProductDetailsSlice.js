import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};


// Async thunk to fetch product details
export const ShowProductDetails = createAsyncThunk(
  "showProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      // Check for HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      // Reject the thunk with a custom error message
      return rejectWithValue(error.message);
    }
  }
);



// ProductDetails slice
export const ProductDetails = createSlice({
  name: "ProductDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(ShowProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset the error state
      })
      .addCase(ShowProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(ShowProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use the error message from rejectWithValue
      });
      
  },
});

export default ProductDetails.reducer;
