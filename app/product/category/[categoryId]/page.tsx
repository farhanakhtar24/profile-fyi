import { getProductByCategory } from "@/actions/get/getProductByCategory";
import React from "react";

type Props = {
  params: {
    categoryId: string;
  };
};

const page = async ({ params }: Props) => {
  const { categoryId } = params;

  const productsList = await getProductByCategory(categoryId);

  return <div>{}</div>;
};

export default page;
