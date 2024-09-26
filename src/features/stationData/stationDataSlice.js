import { createSlice } from "@reduxjs/toolkit";
import { stationDataList } from "../../constants/db";
const initialState = {
  stationDataList: stationDataList,
};

export const stationDataSlice = createSlice({
  name: "stationData",
  initialState,
  reducers: {
    setStationData: (state, action) => {
      state.stationData = action.payload.stationData;
    },
    resetStationData: (state) => {
      state.stationData = [];
    },
  },
});

export const { setStationData, resetStationData } = stationDataSlice.actions;

export default stationDataSlice.reducer;
