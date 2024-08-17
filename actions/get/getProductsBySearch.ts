import { IproductList } from "@/interfaces/products";

export const getProductsBySearch = async (searchKeyword: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${searchKeyword.toLowerCase()}`,
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
  return data as IproductList;
};
