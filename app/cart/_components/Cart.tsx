import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Iproduct } from "@/interfaces/products";
import React from "react";

type Props = {
  products: {
    product: Iproduct;
    quantity: number;
  }[];
};

const Cart = (props: Props) => {
  return <Card className="flex h-full w-[70%] p-5"> p5</Card>;
};

export default Cart;
