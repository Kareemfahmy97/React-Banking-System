import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { tableIsVisible: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.tableIsVisible = !state.tableIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
