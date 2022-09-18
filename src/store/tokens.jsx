import { createSlice } from "@reduxjs/toolkit";

export const tokens = createSlice({
  name: "tokens",
  initialState: { accessToken: null },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = tokens.actions;
