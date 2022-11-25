import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, SearchParams } from "./types";

const baseUrl = "https://63734623348e947299079d45.mockapi.io/products?";
const urlById = "https://63734623348e947299079d45.mockapi.io/products?id=";

export const fetchProducts = createAsyncThunk<Product[], SearchParams>(
  "product/fetchProductStatus",
  async (params) => {
    const { sortBy, order, brand, search, currentPage } = params;
    const { data } = await axios.get<Product[]>(baseUrl, {
      params: {
        page: currentPage,
        limit: 12,
        brand,
        sortBy,
        order,
        search,
      },
    });
    return data;
  }
);
