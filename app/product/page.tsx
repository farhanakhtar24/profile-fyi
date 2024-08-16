import React from "react";
import ProductCard from "./_components/ProductCard";
import { getAllProducts } from "@/actions/get/getAllProducts";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const productsList = await getAllProducts();

  return (
    <div className="grid h-full w-full grid-cols-4 gap-5">
      {productsList.products.map((prod, idx) => {
        return <ProductCard key={idx} product={prod} />;
      })}
    </div>
  );
};

export default page;
