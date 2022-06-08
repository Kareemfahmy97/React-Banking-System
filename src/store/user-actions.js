import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersActions } from "./table-slice";
import { uiAction } from "./ui-slice";



export const getTableUsers = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        ""
      );
      if (!response.ok) {
        throw new Error("Couldn't Fetch users data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const usersData = await fetchData();
      dispatch(
        usersActions.replace({
          users: usersData.users || [],
          accBalance: usersData.accBalance,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching Users Data Failed!",
        })
      );
    }
  };
};

export const sendTableUsers = (table) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending table data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "",
        {
          method: "PUT",
          body: JSON.stringify({
            users: table.users,
            accBalance: table.accBalance,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send table data!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Sent successfully",
          message: "Data sent successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Error occured while sending table data!",
        })
      );
    }
  };
};

