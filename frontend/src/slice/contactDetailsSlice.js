import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],  // Initialize contacts as an empty array
  loading: false, // Set loading state to false
  error: null,  // Initialize error as null
};

// Create the thunk to handle contact creation
export const createContact = createAsyncThunk(
  "createContact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact_details', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // If the response isn't ok (e.g., 500 or 400), reject with error message
      if (!response.ok) {
        const error = await response.text();  // Get the error message as text
        return rejectWithValue(error);  // Return error as rejected payload
      }

      const result = await response.json();  // Parse the JSON response
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactDetails = createSlice({
  name: "contactDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message as a string
      });
  },
});

export default contactDetails.reducer;
