import { configureStore } from "@reduxjs/toolkit";
import { isLogin } from "./store/isLogin";
import { tokens } from "./store/tokens";

export default configureStore({
  reducer: {
    isLogin: isLogin.reducer,
    tokens: tokens.reducer,
  },
});
