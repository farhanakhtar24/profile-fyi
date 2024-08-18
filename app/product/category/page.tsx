import React from "react";
import { getCategories } from "@/actions/get/getCategories";
import CategoryCard from "../_components/CategoryCard";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const productCategories = await getCategories();

  return (
    <div className="grid h-full w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {productCategories.map((category, idx) => {
        return <CategoryCard category={category} key={idx} />;
      })}
    </div>
  );
};

export default page;
