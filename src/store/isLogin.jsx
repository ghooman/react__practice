import { createSlice } from "@reduxjs/toolkit";

export const isLogin = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    setIsLogin(state) {
      return true;
    },
  },
});

export const { setIsLogin } = isLogin.actions;
