import { createSlice } from "@reduxjs/toolkit";
import { allRoutes } from "../../constants/allRoutes";
const initialState = {
  path: allRoutes.homepage,
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setpath: (state, action) => {
      state.path = action.payload.path;
    },
    resetPath: (state) => {
      state.path = allRoutes.homepage;
    },
  },
});

export const { setpath, resetPath } = pathSlice.actions;

export default pathSlice.reducer;
