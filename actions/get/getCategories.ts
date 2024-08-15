import { IproductList } from "@/interfaces/products";

export interface Icategories {
  slug: string;
  name: string;
  url: string;
}

export const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application",
    },
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  return json as Icategories[];
};
