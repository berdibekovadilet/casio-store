import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterState = {
  searchValue: "",
  brandId: 0,
  currentPage: 1,
  sort: {
    name: "More Popular",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setbrandId(state, action: PayloadAction<number>) {
      state.brandId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setbrandId, setSort, setSearchValue, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
