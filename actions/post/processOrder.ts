"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

export const processOrder = async ({
  currentUserId,
}: {
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

    const { cartItems, total, totalItems } = cart;

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

    return;
  } catch (error) {
    console.error("Error placing order", error);
    return;
  }
};
