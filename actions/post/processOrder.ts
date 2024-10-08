"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { getCart } from "../get/getCart";

export const processOrder = async ({
  currentUserId,
}: {
  currentUserId: string;
}) => {
  try {
    const cart = await getCart(currentUserId);

    if (!cart) {
      console.log("Cart not found");
      return;
    }

    const { cartItems, total, totalItems } = cart;

    if (cartItems.length === 0) {
      console.log("Cart is empty");
      return;
    }

    const placedOrder = await db.order.create({
      data: {
        userId: currentUserId,
        total,
        totalItems,
        orderStatus: "paid",
        orderItems: {
          set: [
            ...cartItems.map((item) => ({
              product: item.product,
              quantity: item.quantity,
            })),
          ],
        },
      },
    });

    console.log("Placed order: ", JSON.stringify(placedOrder, null, 2));

    await db.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        cartItems: {
          set: [],
        },
        total: 0,
        totalItems: 0,
      },
    });

    console.log("Order placed successfully");

    revalidatePath("/cart");
    revalidatePath("/orders");

    return;
  } catch (error) {
    console.error("Error placing order", error);
    return;
  }
};
