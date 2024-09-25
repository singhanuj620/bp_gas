import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import filtersReducer from "./features/filters/filtersSlice";
import locationSlice from "./features/location/locationSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    filters: filtersReducer,
    location: locationSlice,
  },
});
