import { db } from "@/db";
import { Iorder } from "@/interfaces/orders";

export const getAllOrders = async (userId: string) => {
  try {
    const orders = await db.order.findMany({
      where: {
        userId: userId,
      },
    });

    if (!orders) {
      console.log("Cart not found");
      return null;
    }

    console.log("Orders: ", JSON.stringify(orders, null, 2));

    return orders as Iorder[];
  } catch (error) {
    console.error(error);
    return null;
  }
};
