import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  filters: {
    open24: false,
    convinienceStore: false,
    hotFood: false,
    bpFuelCards: false,
  },
  radius: 0.5,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearAllFilters: (state) => {
      state.filters = {
        open24: false,
        convinienceStore: false,
        hotFood: false,
        bpFuelCards: false,
      };
    },
    toggleMode: (state) => {
      state.showModal = !state.showModal;
    },
    handleFilterChange: (state, action) => {
      const { type } = action.payload;
      state.filters[type] = !state.filters[type];
    },
    changeRadius: (state, action) => {
      state.radius = action.payload;
    },
  },
});

export const { clearAllFilters, toggleMode, handleFilterChange, changeRadius } =
  filtersSlice.actions;

export default filtersSlice.reducer;
