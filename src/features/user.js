import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { name: "", email: "", password: "" },
  },
  reducers: {
    signin: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", email: "", password: "" };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
