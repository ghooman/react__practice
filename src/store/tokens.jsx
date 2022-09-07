import { createSlice } from "@reduxjs/toolkit";

export const tokens = createSlice({
  name: "tokens",
  initialState: { accessToken: null, refreshToken: null },
});
