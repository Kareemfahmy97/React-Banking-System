import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./table-slice";
import uiSlice from "./ui-slice";
// import counterSlice from "./table-slice";
// import { getTableUsers } from "./user-actions";
import usersReducer from './new-actions';
const store = configureStore({
  reducer: { ui: uiSlice.reducer, table: tableSlice.reducer, users: usersReducer },
});

export default store;