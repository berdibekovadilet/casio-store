import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/slice";
import filterSlice from "./filter/slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
