"use client";
import useCartStore from "@/utils/hooks/useCartStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartList = () => {
  const { items } = useCartStore();
  const itemsCount = items.reduce((acc, cur) => {
    return acc + cur.qty;
  }, 0);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      {isClient && (
        <Link href="/cart">
          Cart{" "}
          <span className="px-2 p-1 rounded-full bg-pink-600">
            {itemsCount}
          </span>
        </Link>
      )}
    </div>
  );
};

export default CartList;
