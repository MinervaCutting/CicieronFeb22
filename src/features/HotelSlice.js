import { createSlice } from "@reduxjs/toolkit";
import { bcnjazz } from "../vendors/jazz/data";

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotel: bcnjazz,
  },
  reducers: {
    SET_HOTEL: (state, action) => {
      state.hotel = action.payload;
    },
  },
});

export const { SET_HOTEL } = hotelSlice.actions;
export const selectHotel = (state) => state.hotel.hotel;

export default hotelSlice.reducer;
