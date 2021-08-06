import { configureStore } from "@reduxjs/toolkit";
import user from "../user";
import venue from "../venue";

const store = configureStore({
  reducer: {
    user: user,
    venue: venue,
  },
});

export default store;
