import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    getUserInfo(state, action) {
      state = action.payload;
    },
  },
});

export const { getUserInfo } = user.actions;
