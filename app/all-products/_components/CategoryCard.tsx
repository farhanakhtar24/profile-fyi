import { Icategories } from "@/actions/get/getCategories";
import Link from "next/link";
import React from "react";

type Props = {
  category: Icategories;
};

const CategoryCard = ({ category }: Props) => {
  const { name, slug } = category;
  return (
    <Link
      className="flex h-auto w-full items-center justify-center rounded-sm border border-slate-300 bg-gray-100 p-10 text-center transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
      href={`/product/${slug}`}
    >
      {name}
    </Link>
  );
};

export default CategoryCard;
