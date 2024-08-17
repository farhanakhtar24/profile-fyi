"use client";
import { processOrder } from "@/actions/post/processOrder";
import { Button } from "@/components/ui/button";
import { Iproduct } from "@/interfaces/products";
import React from "react";

type Props = {
  userId: string | undefined;
};

const PlaceOrderBtn = ({ userId }: Props) => {
  const handlePlaceOrder = async () => {
    await processOrder({
      currentUserId: userId!,
    });
  };

  return (
    <Button
      className="m-5 rounded-sm bg-orange-500 py-6 hover:bg-orange-400 hover:shadow"
      onClick={handlePlaceOrder}
    >
      Place Order
    </Button>
  );
};

export default PlaceOrderBtn;
