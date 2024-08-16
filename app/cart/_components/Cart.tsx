import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Iproduct } from "@/interfaces/products";
import React from "react";

type Props = {
  products: {
    product: Iproduct;
    quantity: number;
  }[];
};

const Cart = ({ products }: Props) => {
  return <Card className="flex h-full w-[70%] flex-col p-5"></Card>;
};

export default Cart;
