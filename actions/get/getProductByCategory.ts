import { IproductList } from "@/interfaces/products";

export const getProductByCategory = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application",
      },
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await res.json();
  return data as IproductList[];
};
