import { db } from "@/db";

export const getOrders = async (userId: string) => {
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

    return orders;
  } catch (error) {
    console.error(error);
    return null;
  }
};
