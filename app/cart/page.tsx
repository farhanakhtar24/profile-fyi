import { getCart } from "@/actions/get/getCart";
import { auth } from "@/auth";
import React from "react";
import Cart from "./_components/Cart";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Summary from "./_components/Summary";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Not logged in</div>;
  }

  const cart = await getCart(session?.user?.id);

  if (!cart) {
    return <div>Cart not found</div>;
  }

  const { cartItems, totalItems, total } = cart;

  const originalTotal = cartItems.reduce((acc, item) => {
    const { discountPercentage, price } = item.product;
    let originalPrice = 0;
    if (discountPercentage) {
      originalPrice = price / (1 - discountPercentage / 100);
    }

    return acc + originalPrice * item.quantity;
  }, 0);

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <Card className="flex h-full w-full">
        <CardHeader>
          <CardTitle>Cart</CardTitle>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-col gap-5 md:flex-row">
        <Cart products={cartItems} />
        <Summary
          discountedTotal={total}
          totalItem={totalItems}
          originaltotal={originalTotal}
        />
      </div>
    </div>
  );
};

export default page;
