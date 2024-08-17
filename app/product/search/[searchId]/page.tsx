import { getProductsBySearch } from "@/actions/get/getProductsBySearch";
import React from "react";
import ProductCard from "../../_components/ProductCard";
import { auth } from "@/auth";

type Props = {
  params: {
    searchId: string;
  };
};

const page = async ({ params }: Props) => {
  const session = await auth();

  const { searchId: searchKeyword } = params;

  const productsList = await getProductsBySearch(searchKeyword);

  console.log("productsList", productsList);

  return (
    <div className="grid h-full w-full grid-cols-4 gap-5">
      {productsList.products.length === 0 && (
        <div className="col-span-4 flex h-[60vh] items-center justify-center">
          No products found
        </div>
      )}
      {productsList.products.map((prod, idx) => {
        return (
          <ProductCard key={idx} product={prod} userId={session?.user?.id} />
        );
      })}
    </div>
  );
};

export default page;
