import { createSlice } from "@reduxjs/toolkit";
import { day1Dinner, day2Dinner } from "../data/budget_selected_lines";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    day1Dinner: day1Dinner,
    day2Dinner: day2Dinner,
  },
  reducers: {
    SET_DAY1DINNER: (state, action) => {
      state.day1Dinner = action.payload;
    },
    SET_DAY2DINNER: (state, action) => {
      state.day2Dinner = action.payload;
    },
  },
});

export const { SET_DAY1DINNER, SET_DAY2DINNER } = restaurantSlice.actions;

export const selectDay1Dinner = (state) => state.restaurant.day1Dinner;

export const selectDay2Dinner = (state) => state.restaurant.day2Dinner;

export default restaurantSlice.reducer;
