import { createSlice } from "@reduxjs/toolkit";
// Slice
const venueSlice = createSlice({
  name: "venue",
  initialState: {
    venues: [],
    venue: undefined,
  },
  reducers: {
    setVenues: (state, action) => {
      state.venues = action.payload.venues;
    },
    clearVenues: (state, action) => {
      state.venue = [];
    },
    addVenue: (state, action) => {
      state.venue = [action.payload.venue, ...state.venues];
    },
    setVenue: (state, action) => {
      state.venue = action.payload.venue;
    },
    clearVenue: (state, action) => {
      state.venue = action.payload.venue;
    },
  },
});
export const { setVenues, clearVenues, addVenue, setVenue, clearVenue } =
  venueSlice.actions;
export default venueSlice.reducer;
