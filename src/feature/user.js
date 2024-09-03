import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  id: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
      } else {
        localStorage.removeItem("token");
      }
    },

    setUserInfos: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  
    clearUser: (state) => {
      state.token = "";
      state.firstname = "";
      state.lastname = "";
      state.userName = "";
      state.email = "";
      localStorage.removeItem("token");
    },
  },
});

export const getUserData = (state) => state.user

export const { setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;