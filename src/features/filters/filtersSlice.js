import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  filters: {
    open24: true,
    convinienceStore: true,
    hotFood: true,
    bpFuelCards: true,
  },
  radius: 0.5,
  filterUpdatedCount: 0,
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
    toggleFilerUpdated: (state) => {
      state.filterUpdatedCount = state.filterUpdatedCount + 1;
    },
  },
});

export const {
  clearAllFilters,
  toggleMode,
  handleFilterChange,
  changeRadius,
  toggleFilerUpdated,
} = filtersSlice.actions;

export default filtersSlice.reducer;
