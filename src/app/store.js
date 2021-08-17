import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/HotelSlice";
import restaurantReducer from "../features/RestaurantSlice";
import darkModeReducer from "../features/DarkModeSlice";
import tabOptionReducer from "../features/TabOptionSlice";
import activityReducer from "../features/ActivitySlice";
import bodyReducer from "../features/BodySlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    hotel: hotelReducer,
    restaurant: restaurantReducer,
    activity: activityReducer,
    tabOption: tabOptionReducer,
    body: bodyReducer,
  },
});
