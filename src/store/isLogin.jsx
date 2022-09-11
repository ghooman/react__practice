import { createSlice } from "@reduxjs/toolkit";

export const isLogin = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    setIsLogin(state, action) {
      return action.payload;
    },
  },
});

export const { setIsLogin } = isLogin.actions;
