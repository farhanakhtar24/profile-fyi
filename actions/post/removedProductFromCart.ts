"use server";

import { db } from "@/db";
import { Iproduct } from "@/interfaces/products";
import { revalidatePath } from "next/cache";
import { getCart } from "../get/getCart";

export const removedProductFromCart = async ({
  product,
  currentUserId,
  quantity,
}: {
  product: Iproduct;
  currentUserId: string;
  quantity: number;
}) => {
  try {
    const cart = await getCart(currentUserId);

    if (!cart) {
      console.log("Cart not found");
      return;
    }

    const res = await db.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        cartItems: {
          set: [
            ...cart.cartItems.filter((item) => item.product.id !== product.id),
          ],
        },
        total: {
          decrement: product.price * quantity,
        },
        totalItems: {
          decrement: quantity,
        },
      },
    });

    // Check if the cart is empty and set total to zero if it is
    if (res.totalItems === 0) {
      await db.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          total: 0,
        },
      });
    }

    console.log("updated cart ", JSON.stringify(res, null, 2));

    console.log("Product removed from the cart");

    revalidatePath("/cart");
  } catch (error) {
    console.error("Error removing product from the cart", error);
  }
};
