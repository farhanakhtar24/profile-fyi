import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Iproduct } from "@/interfaces/products";
import React from "react";
import CartItem from "./CartItem";

type Props = {
  products: {
    product: Iproduct;
    quantity: number;
  }[];
};

const Cart = ({ products }: Props) => {
  return (
    <Card className="flex h-full w-[70%] flex-col divide-y">
      {products.map((item) => {
        const { product, quantity } = item;
        return (
          <CartItem key={product.id} product={product} quantity={quantity} />
        );
      })}
    </Card>
  );
};

export default Cart;
