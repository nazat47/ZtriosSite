import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    signInFailure: (state, action) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
