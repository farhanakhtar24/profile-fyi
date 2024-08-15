import { getProductByCategory } from "@/actions/get/getProductByCategory";
import React from "react";
import ProductCard from "../../_components/ProductCard";

type Props = {
  params: {
    categoryId: string;
  };
};

export const dynamic = "force-dynamic";

const page = async ({ params }: Props) => {
  const { categoryId } = params;

  const productsList = await getProductByCategory(categoryId);

  return (
    <div className="grid w-full grid-cols-4 gap-5 px-10">
      {productsList.products.map((prod, idx) => {
        return <ProductCard key={idx} product={prod} />;
      })}
    </div>
  );
};

export default page;
