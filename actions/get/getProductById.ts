import { Iproduct } from "@/interfaces/products";

export const getProductById = async (productId: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    });

    if (!res) {
      console.log("Product not found");
      return;
    }
    const product = await res.json();

    return product as Iproduct;
  } catch (error) {
    console.error(error);
    return null;
  }
};
