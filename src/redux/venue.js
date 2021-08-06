import { createSlice } from "@reduxjs/toolkit";
// Slice
const venueSlice = createSlice({
  name: "venue",
  initialState: {
    venues: [],
    venue: null,
  },
  reducers: {
    setVenues: (state, action) => {
      console.log(action.payload.venues);
      state.venue = action.payload.venues;
    },
    clearVenues: (state, action) => {
      state.venue = [];
    },
    setVenue: (state, action) => {
      state.venue = action.payload.venue;
    },
    clearVenue: (state, action) => {
      state.venue = action.payload.venue;
    },
  },
});
export const { setVenues, clearVenues } = venueSlice.actions;
export default venueSlice.reducer;
