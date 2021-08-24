import { createSlice } from "@reduxjs/toolkit";
import { tapastour } from "../vendors/tapas_tour/data";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activity1: tapastour,
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
