// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userInfo: null,
// };

// const storedUserInfo = localStorage.getItem("userInfo");
// if (storedUserInfo) {
//   try {
//     initialState.userInfo = JSON.parse(storedUserInfo);
//   } catch (error) {
//     console.error("Error parsing stored user info:", error);
//     localStorage.removeItem("userInfo");
//   }
// }

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       localStorage.setItem("userInfo", JSON.stringify(action.payload));
//     },
//     removeCredentials: (state, action) => {
//       state.userInfo = null;
//       localStorage.removeItem("userInfo");
//     },
//   },
// });

// export const { setCredentials, removeCredentials } = authSlice.actions;

// export default authSlice.reducer;

//This is simply to set user credentials to local storage and remove them
//AKA this is for the local stuff

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
