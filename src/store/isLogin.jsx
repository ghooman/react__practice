import { createSlice } from "@reduxjs/toolkit";

export const isLogin = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    changeIsLogin(state) {
      return true;
    },
  },
});

export const { changeIsLogin } = isLogin.actions;
