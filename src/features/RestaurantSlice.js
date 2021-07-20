import { createSlice } from "@reduxjs/toolkit";
import { mealEvents } from "../data/restaurants";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    day1Lunch: mealEvents.day1Lunch,
    day1Dinner: mealEvents.day1Dinner,
    day2Lunch: mealEvents.day2Lunch,
    day2Dinner: mealEvents.day2Dinner,
    day3Lunch: mealEvents.day3Lunch,
  },
  reducers: {
    SET_DAY1LUNCH: (state, action) => {
      state.day1Lunch = action.payload;
    },
    SET_DAY1DINNER: (state, action) => {
      state.day1Dinner = action.payload;
    },
    SET_DAY2LUNCH: (state, action) => {
      state.day2Lunch = action.payload;
    },
    SET_DAY2DINNER: (state, action) => {
      state.day2Dinner = action.payload;
    },
    SET_DAY3LUNCH: (state, action) => {
      state.day3Lunch = action.payload;
    },
  },
});

export const {
  SET_DAY1LUNCH,
  SET_DAY1DINNER,
  SET_DAY2LUNCH,
  SET_DAY2DINNER,
  SET_DAY3LUNCH,
} = restaurantSlice.actions;

export const selectDay1Lunch = (state) => state.restaurant.day1Lunch;
export const selectDay1Dinner = (state) => state.restaurant.day1Dinner;
export const selectDay2Lunch = (state) => state.restaurant.day2Lunch;
export const selectDay2Dinner = (state) => state.restaurant.day2Dinner;
export const selectDay3Lunch = (state) => state.restaurant.day3Lunch;

export default restaurantSlice.reducer;
