import ProductItem from "@/components/products/ProductItem";
import data from "@/utils/data";

export default function Home(): JSX.Element {
  return (
    <>
      <h2>Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2 ">
        {data.products.map((item) => (
          <ProductItem key={item.slug} product={item} />
        ))}
      </div>
    </>
  );
}
