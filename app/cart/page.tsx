import { getCart } from "@/actions/get/getCart";
import { auth } from "@/auth";
import React from "react";
import Cart from "./_components/Cart";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Summary from "./_components/Summary";
import { Iproduct } from "@/interfaces/products";

type Props = {};

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

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <Card className="flex h-full w-full">
        <CardHeader>
          <CardTitle>Cart</CardTitle>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full gap-5">
        <Cart products={cartItems} />
        <Summary />
      </div>
    </div>
  );
};

export default page;
