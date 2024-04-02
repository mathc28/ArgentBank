import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    token: "",
    firstname: "John",
    lastname: "Doe",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    setUserInfos: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
    },
  },
});

export const { setToken, setUserInfos } = user.actions;

export default user.reducer;
