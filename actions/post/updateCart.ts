"use server";

import { db } from "@/db";
import { Iproduct } from "@/interfaces/products";
import { revalidatePath } from "next/cache";

export const updateCart = async ({
  operation,
  product,
  quantity,
  currentUserId,
}: {
  operation: "increment" | "decrement";
  product: Iproduct;
  quantity: number;
  currentUserId: string;
}) => {
  try {
    const cart = await db.cart.findFirst({
      where: {
        userId: currentUserId,
      },
    });

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
                quantity:
                  operation === "increment"
                    ? productInCart.quantity + quantity
                    : productInCart.quantity - quantity,
                product,
              },
            ],
          },
          total: {
            [operation]: product.price * quantity,
          },
          totalItems: {
            [operation]: quantity,
          },
        },
      });

      console.log(res);

      console.log("Cart updated");

      revalidatePath("/cart");

      return res;
    } else {
      console.log("Product not found in the cart");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
