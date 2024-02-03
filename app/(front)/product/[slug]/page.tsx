import React from "react";
import Image from "next/image";
import data from "@/utils/data";
import AddToCart from "@/components/products/addToCart";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const product = data.products.find((item) => item.slug === params.slug);
  if (!product) {
    return <div>no data found</div>;
  }
  return (
    <div className="container p-4">
      <div className="md:grid md:grid-cols-4 gap-2">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <ul className="md:col-span-1 shadow-xl">
            <li>{product.name}</li>
            <li>{product.rating} of 10 reviews</li>
            <li>{product.brand}</li>
            <li>
              Description : <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <div className="card bg-base-300 p-6 flex flex-col gap-2">
            <div className="flex justify-between">
              <p>price</p>
              <p>₹{product.price}</p>
            </div>
            <div className="flex justify-between">
              <div>status</div>
              <div>
                {product.countInStock > 0 ? "In Stock" : "Unavailaible"}
              </div>
            </div>
            <div className="flex justify-center">
              <AddToCart item={product} />
            </div>
          </div>
        </div>
      </div>
      <div>Revies</div>
    </div>
  );
};

export default ProductDetails;
