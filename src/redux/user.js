import { createSlice } from "@reduxjs/toolkit";
// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { firstName, lastName, phoneNo, role } = action.payload;
      state.currentUser = { firstName, lastName, phoneNo, role };
    },
    clearUser: (state, action) => {
      state.currentUser = null;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
