import { IproductList } from "@/interfaces/products";

export const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  return json as IproductList;
};
