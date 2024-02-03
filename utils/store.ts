import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { OrderItem } from "./models/OrderItem";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>()(
  devtools(
    persist(() => initialState, {
      name: "cartStore",
    })
  )
);
