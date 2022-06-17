import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./table-slice";
// import { getTableUsers } from "./user-actions";
import usersReducer from './new-actions';
import tableReducer from './table-slice';
const store = configureStore({
  reducer: { table: tableReducer, users: usersReducer },
});

export default store;
