import React from "react";
import ProductCard from "./_components/ProductCard";
import { getAllProducts } from "@/actions/get/getAllProducts";
import { auth } from "@/auth";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const session = await auth();
  const productsList = await getAllProducts();

  return (
    <div className="grid h-full w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {productsList.products.map((prod, idx) => {
        return (
          <ProductCard key={idx} product={prod} userId={session?.user?.id} />
        );
      })}
    </div>
  );
};

export default page;
