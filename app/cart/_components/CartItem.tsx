import { CardTitle } from "@/components/ui/card";
import { Iproduct } from "@/interfaces/products";
import Image from "next/image";
import React from "react";

type Props = {
  product: Iproduct;
  quantity: number;
};

const CartItem = ({ product, quantity }: Props) => {
  const { thumbnail, price, title, stock, discountPercentage } = product;

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let originalPrice = 0;
  if (discountPercentage) {
    originalPrice = price / (1 - discountPercentage / 100);
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex gap-5">
        <Image
          src={thumbnail}
          alt={title}
          width={999}
          height={999}
          className="w-[15%]"
        />
        <div className="flex w-[85%] flex-col justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <p>Stock: {stock}</p>
          <div className="flex items-baseline gap-3">
            <CardTitle>{formattedPrice}</CardTitle>
            {originalPrice > 0 && (
              <p className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            )}
            {discountPercentage && (
              <p className="text-sm font-semibold text-green-700">
                {discountPercentage}% off
              </p>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CartItem;
