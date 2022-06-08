import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table-slice";
import uiSlice from "./ui-slice";
// import counterSlice from "./table-slice";
// import { getTableUsers } from "./user-actions";
import newSliceReducer from './new-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, table: tableSlice.reducer, users: newSliceReducer },
});

export default store;
