import { createSlice } from "@reduxjs/toolkit";

const initialTableState = {users: [], accBalance: 0, changed: false};

const tableSlice = createSlice({
  name: "table",
  initialState: initialTableState,
  reducers: {
    replaceCart(state, action) {
      state.accBalance = action.payload.accBalance;
      state.users = action.payload.users;
      const newItem = action.payload;

      state.items.push({
          key: newItem.id,
          id: newItem.id,
          accBalance: newItem.price,
          email: newItem.email,
          name: newItem.name,})
    },
  },
});


export const usersActions = tableSlice.actions;

export default tableSlice;
