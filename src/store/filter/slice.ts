import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterState = {
  brandId: 0,
  sort: {
    name: "More Popular",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setbrandId(state, action: PayloadAction<number>) {
      state.brandId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setbrandId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
