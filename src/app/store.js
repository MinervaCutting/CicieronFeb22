import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/HotelSlice";
import restaurantReducer from "../features/RestaurantSlice";
import darkModeReducer from "../features/DarkModeSlice";
import tabOptionReducer from "../features/TabOptionSlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    hotel: hotelReducer,
    restaurant: restaurantReducer,
    tabOption: tabOptionReducer,
  },
});
