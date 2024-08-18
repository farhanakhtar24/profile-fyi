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
    <Card className="flex h-[66vh] w-full flex-col divide-y overflow-auto md:w-[70%]">
      {products.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          No Products in the cart
        </div>
      ) : (
        products.map((item) => {
          const { product, quantity } = item;
          return (
            <CartItem key={product.id} product={product} quantity={quantity} />
          );
        })
      )}
    </Card>
  );
};

export default Cart;
