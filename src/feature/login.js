import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isConnected: false,
        token: "",
        firstName: "",
        lastName: "",
        email: "",
        userName: ""
    },
    reducers: {
        setUserInfos: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.isConnected = true;
        },
        setUserAuth: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            state.isConnected = true;
        },
        storeToken: (state) => {
            // Stocker le token dans le localStorage si présent
            if (state.token) {
                localStorage.setItem('token', state.token);
            }
        },
        logout: (state) => {
            state.isConnected = false;
            state.token = "";
            state.email = "";
            state.password = "";
            state.firstName = "";
            state.lastName = "";
            state.userName = "";

            // Supprimer le token du localStorage
            localStorage.removeItem('token');
        },
    },
});

export const { setUserInfos, setUserAuth, storeToken, logout } = loginSlice.actions;
export default loginSlice.reducer;
