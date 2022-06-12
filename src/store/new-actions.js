import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTableUsers = createAsyncThunk(
  "users/fetchTableUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://bank-system-app-default-rtdb.firebaseio.com/Users.json"
      );
      const data = response.data;
      const ourData = [];
      for (const key in data) {
        console.log(key);

        const everyUser = {
          id: key,
          ...data[key],
        };
        ourData.push(everyUser);
    }
      console.log(ourData);
      return ourData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialUsersState = {
  loading: "idle",
  data: [],
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTableUsers.pending, (state) => {
      state.data = [];
      state.loading = "loading";
    });
    builder.addCase(fetchTableUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = "loaded";
    });
    builder.addCase(fetchTableUsers.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});
console.log(initialUsersState);

export const {} = usersSlice.actions;

export default usersSlice.reducer;