import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";




const baseURL = "https://bank-system-app-default-rtdb.firebaseio.com/Users.json";
export const fetchTableUsers = createAsyncThunk(
  "users/fetchTableUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      const data = response.data;
      const ourData = [];
      for (const key in data) {
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



// =(cart)=>



export const updateUserData = createAsyncThunk(
  "users/updateFirstUserBalance",
  async (myData, thunkAPI) => {
    try {
      const { userId, allData ,amountChange, lastTrans } = myData;
      const response = await axios.put(
        `https://bank-system-app-default-rtdb.firebaseio.com/Users/${userId}.json`,
        {
          ...allData,
          accBalance: amountChange,
          lastTrans: lastTrans,
        }
      );
      // const updatedData = [];
      // updatedData.push(response.data);
      return (response.data);
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
    builder.addCase(updateUserData.pending, (state) => {
      state.data = state.data;
      state.loading = "loading";
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.data = state.data.map(u => u.id !== action.payload.id ? u : action.payload);
      state.loading = "loaded";
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;