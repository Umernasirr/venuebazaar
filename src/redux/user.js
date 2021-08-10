import { createSlice } from "@reduxjs/toolkit";
// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: undefined,
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      // console.log(user, "user");
      state.currentUser = user;
    },
    clearUser: (state, action) => {
      state.currentUser = undefined;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
