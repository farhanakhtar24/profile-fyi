import { Icategories } from "@/actions/get/getCategories";
import React from "react";

type Props = {
  category: Icategories;
};

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="flex h-auto w-full items-center justify-center p-10">
      {category.name}
    </div>
  );
};

export default CategoryCard;
