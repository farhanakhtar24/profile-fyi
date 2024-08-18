import { CardTitle } from "@/components/ui/card";
import { Iproduct } from "@/interfaces/products";
import Image from "next/image";
import React from "react";
import QuantitySelectorInput from "./QuantitySelectorInput";
import { auth } from "@/auth";

type Props = {
  product: Iproduct;
  quantity: number;
};

const CartItem = async ({ product, quantity }: Props) => {
  const session = await auth();

  const { thumbnail, price, title, stock, discountPercentage, rating } =
    product;

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let originalPrice = 0;
  if (discountPercentage) {
    originalPrice = price / (1 - discountPercentage / 100);
  }

  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className="flex flex-col gap-5 md:flex-row">
        <Image
          src={thumbnail}
          alt={title}
          width={999}
          height={999}
          className="w-full md:w-[15%]"
        />
        <div className="flex w-full flex-col justify-between md:w-[85%]">
          <p className="text-xl font-semibold">{title}</p>
          <div className="flex w-full flex-col gap-2">
            <p className="text-sm text-gray-600">In Stock: {stock}</p>
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
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">{rating} ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <QuantitySelectorInput
          quantity={quantity}
          userId={session?.user?.id}
          product={product}
        />
      </div>
    </div>
  );
};

export default CartItem;
