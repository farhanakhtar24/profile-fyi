"use server";

import { db } from "@/db";

export const addToCart = async (productId: number, currentUserId: string) => {
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

    // add the productId to the user's cart
    await db.cart.update({
      where: {
        id: user.cart[0].id,
      },
      data: {
        cartItems: {
          push: {
            productId: String(productId),
            quantity: 1,
          },
        },
      },
    });

    console.log("Product added to cart");

    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};
