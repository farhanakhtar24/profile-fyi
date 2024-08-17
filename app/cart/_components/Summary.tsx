import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import PlaceOrderBtn from "./PlaceOrderBtn";

type Props = {
  discountedTotal: number | null;
  totalItem: number | null;
  originaltotal: number;
};

const Summary = ({ discountedTotal, originaltotal, totalItem }: Props) => {
  const formattedPrices = {
    originaltotal: originaltotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
    discount: (originaltotal - discountedTotal!).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
    discountedTotal: discountedTotal!.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  };
  return (
    <Card className="flex h-[66vh] w-[30%] flex-col justify-between">
      <div className="flex flex-col divide-y">
        <div className="flex justify-between p-5">
          <p className="text-lg font-semibold text-black/80">PRICE DETAILS</p>
        </div>
        <div className="flex w-full flex-col gap-3 p-5">
          <div className="flex justify-between">
            <p>Price ({totalItem} items)</p>
            <p className="">{formattedPrices.originaltotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p className="text-green-600">{formattedPrices.discount}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Charges</p>
            <p className="text-green-600">Free</p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <p>Total Amount</p>
            <p>{formattedPrices.discountedTotal}</p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <p className="text-base font-semibold text-green-700">
              You will save {formattedPrices.discount} on this order.
            </p>
          </div>
        </div>
      </div>
      <PlaceOrderBtn />
    </Card>
  );
};

export default Summary;
