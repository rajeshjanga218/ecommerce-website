import { Product } from "@/utils/models/ProductModel";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-300 shadow-xl p-2">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-actions">{product.rating}</p>
        <p className="card-actions">{product.brand}</p>
        <p className="card-actions">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
