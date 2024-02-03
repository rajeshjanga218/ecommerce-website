"use client";
import useCartStore from "@/utils/hooks/useCartStore";
import React from "react";

function AddToCart({ item }: any) {
  const { items, increase, dicrease } = useCartStore();
  const exist = items.find((x) => x.slug === item.slug);

  const handleRemoveItem = () => {
    dicrease(item);
  };

  const handleAddItem = () => {
    increase(item);
  };

  return (
    <div className="flex justify-center bg-emerald-200 w-full py-2 rounded-xl gap-4">
      {!exist ? (
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      ) : (
        <>
          <button type="button" onClick={handleRemoveItem}>
            -
          </button>
          <button type="button">{exist.qty}</button>
          <button type="button" onClick={handleAddItem}>
            +
          </button>
        </>
      )}
    </div>
  );
}

export default AddToCart;
