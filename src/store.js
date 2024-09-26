import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import filtersReducer from "./features/filters/filtersSlice";
import locationReducer from "./features/location/locationSlice";
import pathReducer from "./features/path/pathSlice";
import stationDataReducer from "./features/stationData/stationDataSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    filters: filtersReducer,
    location: locationReducer,
    path: pathReducer,
    stationData: stationDataReducer,
  },
});
