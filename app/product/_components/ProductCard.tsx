import { Iproduct } from "@/interfaces/products";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

type Props = {
  product: Iproduct;
  userId: string | undefined;
};

const ProductCard = ({ product, userId }: Props) => {
  const { id, title, price, discountPercentage, stock, thumbnail, rating } =
    product;

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="relative flex h-full w-full flex-col">
      {!stock && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full cursor-not-allowed items-center justify-center rounded-lg bg-black/50">
          <p className="text-2xl font-semibold text-white">Out of Stock</p>
        </div>
      )}
      <div className="h-full w-full">
        <Card className="flex h-full flex-col transition-all hover:border-slate-300 hover:shadow-md">
          <CardHeader className="h-full">
            <Image src={thumbnail} alt={title} width={999} height={999} />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-black/80">{title}</p>
            <div className="flex items-baseline gap-3">
              <CardTitle>{formattedPrice}</CardTitle>
              {discountPercentage && (
                <p className="text-sm font-semibold text-green-700">
                  {discountPercentage}% off
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">{rating} ⭐</p>
            </div>
          </CardContent>
          <CardFooter>
            {stock ? (
              <AddToCartBtn product={product} userId={userId} />
            ) : (
              <p className="my-2 text-red-500">Out of Stock</p>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
