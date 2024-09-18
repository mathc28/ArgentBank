import { createSlice } from "@reduxjs/toolkit";

// Fonction pour récupérer le token depuis localStorage
const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token') || null;
};

// Fonction pour récupérer les informations de l'utilisateur depuis localStorage
const getUserInfoFromLocalStorage = () => {
    // Tu pourrais également stocker d'autres informations dans localStorage si nécessaire
    return {
        firstName: localStorage.getItem('firstName') || '',
        lastName: localStorage.getItem('lastName') || '',
        email: localStorage.getItem('email') || '',
    };
};

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isConnected: !!getTokenFromLocalStorage(),
        token: getTokenFromLocalStorage(),
        firstName: getUserInfoFromLocalStorage().firstName,
        lastName: getUserInfoFromLocalStorage().lastName,
        email: getUserInfoFromLocalStorage().email,
        userName: "",
    },
    reducers: {
        setUserInfos: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.isConnected = true;

            // Stocker les informations utilisateur dans localStorage
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);
            localStorage.setItem('email', action.payload.email);
        },
        setUserAuth: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            state.isConnected = true;

            // Stocker le token dans localStorage
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('firstName', action.payload.firstName || '');
            localStorage.setItem('lastName', action.payload.lastName || '');
            localStorage.setItem('email', action.payload.email || '');
        },
        storeToken: (state, action) => {
            state.token = action.payload;
            state.isConnected = true; // Assure que isConnected est mis à jour

            // Stocker le token dans localStorage
            localStorage.setItem('token', action.payload);
        },
        logout: (state) => {
            state.isConnected = false;
            state.email = "";
            state.password = "";
            state.firstName = "";
            state.lastName = "";
            state.token = null;

            // Supprimer le token et les informations utilisateur de localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('email');
        },
    },
});

export const { setUserInfos, setUserAuth, storeToken, logout } = loginSlice.actions;
export default loginSlice.reducer;
