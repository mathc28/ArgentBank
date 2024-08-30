import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user";
import loginReducer from "./feature/login"

export default configureStore({
  reducer: {
    user: userReducer,
    login : loginReducer
  },
});
