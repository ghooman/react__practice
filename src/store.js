import { configureStore } from "@reduxjs/toolkit";
import { isLogin } from "./store/isLogin";
import { tokens } from "./store/tokens";
import { user } from "./store/user";

export default configureStore({
  reducer: {
    isLogin: isLogin.reducer,
    tokens: tokens.reducer,
    user: user.reducer,
  },
});
