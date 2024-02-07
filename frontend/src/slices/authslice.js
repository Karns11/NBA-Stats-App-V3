import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const storedUserInfo = localStorage.getItem("userInfo");
if (storedUserInfo) {
  try {
    initialState.userInfo = JSON.parse(storedUserInfo);
  } catch (error) {
    console.error("Error parsing stored user info:", error);
    localStorage.removeItem("userInfo");
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
