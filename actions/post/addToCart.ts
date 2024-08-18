"use server";

import { db } from "@/db";
import { Iproduct } from "@/interfaces/products";
import { revalidatePath } from "next/cache";
import { getCart } from "../get/getCart";

export const addToCart = async ({
  product,
  quantity,
  currentUserId,
}: {
  product: Iproduct;
  quantity: number;
  currentUserId: string;
}) => {
  try {
    console.log(
      `Adding ${quantity} of ${product.title} to the cart of user ${currentUserId}`,
    );
    const cart = await getCart(currentUserId);

    if (!cart) {
      console.log("Cart not found");
      return;
    }

    // chcek if the product is already in the cart
    const productInCart = cart.cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (productInCart) {
      const res = await db.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          cartItems: {
            set: [
              ...cart.cartItems.filter(
                (item) => item.product.id !== product.id,
              ),
              {
                quantity: productInCart.quantity + quantity,
                product,
              },
            ],
          },
          total: {
            increment: product.price * quantity,
          },
          totalItems: {
            increment: quantity,
          },
        },
      });
      console.log("updated cart ", JSON.stringify(res, null, 2));
    } else {
      const res = await db.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          cartItems: {
            push: {
              quantity,
              product,
            },
          },
          total: {
            increment: product.price * quantity,
          },
          totalItems: {
            increment: quantity,
          },
        },
      });
      console.log("updated cart ", JSON.stringify(res, null, 2));
    }

    console.log("Product added to cart");

    revalidatePath("/cart");

    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};
