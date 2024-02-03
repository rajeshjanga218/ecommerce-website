import { round2 } from "../helper";
import { OrderItem } from "../models/OrderItem";
import { cartStore } from "../store";

export default function useCartStore() {
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    cartStore();

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    increase: (item: OrderItem) => {
      const existedItem = items.find((x) => x.slug === item.slug);

      const updatedItems = existedItem
        ? items.map((x) =>
            x.slug === item.slug
              ? { ...existedItem, qty: existedItem.qty + 1 }
              : x
          )
        : [...items, { ...item, qty: 1 }];

      const calculatePrice = (updatedItems: any) => {
        const itemsPrice = round2(
            items.reduce((acc, item) => acc + item.price * item.qty, 0)
          ),
          shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
          taxPrice = round2(Number(0.15 * itemsPrice)),
          totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
        return { itemsPrice, shippingPrice, taxPrice, totalPrice };
      };

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calculatePrice(updatedItems);
      cartStore.setState({
        items: updatedItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },

    dicrease: (item: OrderItem) => {
      const existedItem = items.find((x) => x.slug === item.slug);

      if (!existedItem) return;

      const updatedItems =
        existedItem.qty === 1
          ? items.filter((x) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug
                ? { ...existedItem, qty: existedItem.qty - 1 }
                : x
            );

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calculatePrice(updatedItems);
      cartStore.setState({
        items: updatedItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
  };
}

const calculatePrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
