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

    // Check if the product is already in the cart
    const productInCart = cart.cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (operation === "decrement" && productInCart?.quantity === 1) {
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
            ],
          },
          total: {
            decrement: product.price,
          },
          totalItems: {
            decrement: 1,
          },
        },
      });

      console.log("updated cart ", JSON.stringify(res, null, 2));

      console.log("Product removed from the cart");

      revalidatePath("/cart");

      return res;
    }

    if (productInCart) {
      const updatedCartItems = cart.cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            quantity:
              operation === "increment"
                ? productInCart.quantity + quantity
                : productInCart.quantity - quantity,
            product,
          };
        }
        return item;
      });

      const res = await db.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          cartItems: {
            set: updatedCartItems,
          },
          total: {
            [operation]: product.price * quantity,
          },
          totalItems: {
            [operation]: quantity,
          },
        },
      });

      console.log("updated cart ", JSON.stringify(res, null, 2));

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
