import React from "react";
import { getCategories } from "@/actions/get/getCategories";
import CategoryCard from "./_components/CategoryCard";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const productCategories = await getCategories();

  return (
    <div className="mx-auto grid h-full w-full max-w-screen-xl grid-cols-6 gap-5">
      {productCategories.map((category, idx) => {
        return <CategoryCard category={category} key={idx} />;
      })}
    </div>
  );
};

export default page;
