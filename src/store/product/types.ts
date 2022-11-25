export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  cover: string;
  images: string[];
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchParams = {
  sortBy: string;
  order: string;
  brand: string;
  search: string;
  currentPage: string;
};

export interface ProductSliceState {
  items: Product[];
  status: Status;
}
