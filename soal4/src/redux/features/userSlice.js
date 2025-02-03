import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api/index";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(api.url);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
