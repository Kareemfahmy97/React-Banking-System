import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMyTableHistory = createAsyncThunk(
  "table/fetchMyTableHistory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://bank-system-app-default-rtdb.firebaseio.com/History.json"
      );
      const data = response.data;
      const mytableData = [];
      for (const key in data) {
        const everyTrans = {
          id: key,
          ...data[key],
        };
        mytableData.push(everyTrans);
      }
      return mytableData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const fetchTableUsers = createAsyncThunk(
//   "users/fetchTableUsers",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         "https://bank-system-app-default-rtdb.firebaseio.com/History.json"
//       );
//       const data = response.data;
//       const tableFinalData = [];
//       for (const key in data) {
//         const everyUser = {
//           id: key,
//           ...data[key],
//         };
//         tableFinalData.push(everyUser);
//       }
//       console.log(tableFinalData);
//       return tableFinalData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
export const setTableTrans = createAsyncThunk(
  "table/setTableTrans",
  async (myData, thunkAPI) => {
    try {
      const { firstUser, secondUser, amountChange, lastTrans, key } = myData;
      const response = await axios.post(
        "https://bank-system-app-default-rtdb.firebaseio.com/History.json",
        {
          from: firstUser,
          to: secondUser,
          key: key,
          amount: amountChange,
          date: lastTrans,
        }
      );
      return response.data;
    }catch(error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialTableState = { data: [], accBalance: 0, changed: false };
const tableSlice = createSlice({
  name: "table",
  initialState: initialTableState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyTableHistory.pending, (state) => {
      state.data = [];
      state.loading = "loading";
    });
    builder.addCase(fetchMyTableHistory.fulfilled, (state, action) => {
      state.data= action.payload;
      state.loading = "loaded";
    });
    builder.addCase(fetchMyTableHistory.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
    builder.addCase(setTableTrans.pending, (state) => {
      state.data = state.data;
      state.loading = "loading";
    });
    builder.addCase(setTableTrans.fulfilled, (state, action) => {
      state.loading = "loaded";
    });
    builder.addCase(setTableTrans.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export const {} = tableSlice.actions;

export default tableSlice.reducer;
