import { createSlice } from "@reduxjs/toolkit";
import { preferredHotel } from "../data/hotels";

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotel: preferredHotel,
  },
  reducers: {
    SET_HOTEL: (state, action) => {
      state.hotel = action.payload;
    },
  },
});

export const { SET_HOTEL, DELETE_HOTEL } = hotelSlice.actions;
export const selectHotel = (state) => state.hotel.hotel;

export default hotelSlice.reducer;