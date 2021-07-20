import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/HotelSlice";
import restaurantReducer from "../features/RestaurantSlice";

export default configureStore({
  reducer: {
    hotel: hotelReducer,
    restaurant: restaurantReducer,
  },
});
