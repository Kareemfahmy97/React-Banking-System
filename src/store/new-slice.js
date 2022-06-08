import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const newSlice = createSlice({
  name: "tableUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUsers.pending]: (state, action) => {
      state.loading = false;
      state.error = "error";
    },
  },
});

export const {} = newSlice.actions;

export default newSlice.reducer;
