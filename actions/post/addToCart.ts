"use server";

import { db } from "@/db";
import { Iproduct } from "@/interfaces/products";

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

    // chcek if the product is already in the cart
    const productInCart = user.cart[0].cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (productInCart) {
      const cart = await db.cart.update({
        where: {
          id: user.cart[0].id,
        },
        data: {
          cartItems: {
            set: [
              ...user.cart[0].cartItems.map((item) => {
                if (item.product.id === product.id) {
                  return {
                    quantity: item.quantity + quantity,
                    product,
                  };
                }
                return item;
              }),
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
      console.log(cart);
    } else {
      const cart = await db.cart.update({
        where: {
          id: user.cart[0].id,
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
      console.log(cart);
    }

    console.log("Product added to cart");

    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};
