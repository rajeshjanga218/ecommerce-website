"use client";
import useCartStore from "@/utils/hooks/useCartStore";
import Image from "next/image";

import React from "react";

const Page = () => {
  const { items, totalPrice, increase, dicrease } = useCartStore();
  const totalQty = items.reduce((acc, cur) => {
    return acc + cur.qty;
  }, 0);

  const handleAddItem = (index: number) => {
    increase(items[index]);
  };
  const handleRemoveItem = (index: number) => {
    dicrease(items[index]);
  };

  return (
    <div className="p-4">
      <h1>Shopping cart</h1>
      <div className="grid grid-cols-6 gap-3 py-2">
        <div className="col-span-4">
          {items.length < 1 ? (
            <div>Not items found in cart</div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={300}
                          width={300}
                          className="h-16 w-16"
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                        >
                          -
                        </button>
                        <p>{item.qty}</p>
                        <button
                          type="button"
                          onClick={() => handleAddItem(index)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="col-span-2 bg-base-300 rounded-xl px-4 flex flex-col justify-center gap-4 ">
          <p>
            Subtotal({totalQty}) : ₹{items.length < 1 ? " 0" : totalPrice}
          </p>
          <button type="button" className="btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
