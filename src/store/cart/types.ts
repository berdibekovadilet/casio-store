export type CartItem = {
  id: string | number;
  title: string;
  price: number;
  cover: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
