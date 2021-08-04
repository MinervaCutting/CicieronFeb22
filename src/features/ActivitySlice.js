import { createSlice } from "@reduxjs/toolkit";
import { activityEvents } from "../data/activities";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activity1: activityEvents.activity1,
  },
  reducers: {
    SET_ACTIVITY1: (state, action) => {
      state.activity1 = action.payload;
    },
  },
});

export const { SET_ACTIVITY1 } = activitySlice.actions;

export const selectActivity1 = (state) => state.activity.activity1;

export default activitySlice.reducer;
