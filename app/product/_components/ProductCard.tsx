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
};

const ProductCard = ({ product }: Props) => {
  const { id, title, price, discountPercentage, stock, thumbnail } = product;
  console.log("title:", product);

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="relative flex h-full w-full flex-col">
      {!stock && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-lg bg-black/50">
          <p className="text-2xl font-semibold text-white">Out of Stock</p>
        </div>
      )}
      <Link className="h-full w-full" href={`/product/${id}`} target="_blank">
        <Card className="flex h-full flex-col transition-all hover:border-slate-400 hover:shadow-md">
          <CardHeader className="h-full">
            <Image src={thumbnail} alt={title} width={999} height={999} />
            {/* <CardDescription>{description}</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-black/80">{title}</p>
            <div className="flex items-baseline gap-3">
              <CardTitle>{formattedPrice}</CardTitle>
              {discountPercentage && (
                <p className="text-sm font-semibold text-green-700">
                  {discountPercentage}% off
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {stock ? (
              <AddToCartBtn productId={id} />
            ) : (
              <p className="my-2 text-red-500">Out of Stock</p>
            )}
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
