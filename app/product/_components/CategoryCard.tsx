import { Icategories } from "@/actions/get/getCategories";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Props = {
  category: Icategories;
};

const CategoryCard = ({ category }: Props) => {
  const { name, slug } = category;
  return (
    <Link
      className="flex h-full w-full flex-col items-center justify-center text-center"
      href={`/product/category/${slug}`}
    >
      <Card className="flex h-full w-full flex-col items-center justify-center p-10 transition-all hover:border-slate-300 hover:shadow-md">
        {name}
      </Card>
    </Link>
  );
};

export default CategoryCard;
