import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const initialState =  {
  products:{},
  loading:false,
  error:null
}

export const SingleProduct = createAsyncThunk(
  "singleProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`"https://fakestoreapi.com/products/${id}"`);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const SingleProductDetails= createSlice({
    name: "SingleProductDetails",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(SingleProduct.pending, (state) => {
            state.loading = true;
            state.error = null; // Reset the error state
          })
          .addCase(SingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(SingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Use the error message from rejectWithValue
          });
          
      },

})

export default SingleProductDetails.reducer