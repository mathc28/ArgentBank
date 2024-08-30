import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoading: null,
  error: null,
  user: null, 
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

export const { setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;