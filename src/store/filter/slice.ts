import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterState {
  brandId: number;
  sort: Sort;
}

const initialState: FilterState = {
  brandId: 0,
  sort: {
    name: "Popular",
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
  },
});

export const { setbrandId } = filterSlice.actions;

export default filterSlice.reducer;

