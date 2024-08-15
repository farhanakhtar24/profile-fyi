import { db } from "@/db";

export const getCart = async (userId: string) => {
  try {
    const cart = await db.cart.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!cart) {
      console.log("Cart not found");
      return;
    }

    return cart;
  } catch (error) {
    console.error(error);
    return null;
  }
};
