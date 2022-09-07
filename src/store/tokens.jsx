import { createSlice } from "@reduxjs/toolkit";

export const tokens = createSlice({
  name: "tokens",
  initialState: { accessToken: null, refreshToken: null },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken } = tokens.actions;
