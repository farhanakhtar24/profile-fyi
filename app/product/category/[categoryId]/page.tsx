import { getProductByCategory } from "@/actions/get/getProductByCategory";
import React from "react";
import ProductCard from "../../_components/ProductCard";
import { auth } from "@/auth";

type Props = {
  params: {
    categoryId: string;
  };
};

export const dynamic = "force-dynamic";

const page = async ({ params }: Props) => {
  const { categoryId } = params;
  const session = await auth();

  const productsList = await getProductByCategory(categoryId);

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
