"use server";

import { db } from "@/db";
import { Iproduct } from "@/interfaces/products";

export const addToCart = async (product: Iproduct, currentUserId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: currentUserId,
      },
      include: {
        cart: true,
      },
    });

    if (!user) {
      console.log("User not found");
      return;
    }

    const cart = await db.cart.update({
      where: {
        id: user.cart[0].id,
      },
      data: {
        cartItems: {
          push: {
            quantity: 1,
            product: product,
          },
        },
      },
    });

    console.log(cart);

    console.log("Product added to cart");

    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};
