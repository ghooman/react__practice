import { configureStore } from "@reduxjs/toolkit";
import { tokens } from "./store/tokens";
import { user } from "./store/user";

export default configureStore({
  reducer: {
    tokens: tokens.reducer,
    user: user.reducer,
  },
});
