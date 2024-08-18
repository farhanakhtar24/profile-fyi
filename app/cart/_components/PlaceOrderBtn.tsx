"use client";
import { processOrder } from "@/actions/post/processOrder";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  userId: string | undefined;
  totalItem: number | null;
};

const PlaceOrderBtn = ({ userId, totalItem }: Props) => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlePlaceOrder = async () => {
    setLoading(true);
    await processOrder({
      currentUserId: userId!,
    });
    toast({
      title: "Order placed successfully.",
      description: "Your order has been successfully placed.",
      variant: "success",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
    setLoading(false);
    router.push("/orders");
  };

  return (
    <>
      {totalItem ? (
        <Button
          className="m-5 rounded-sm bg-orange-500 py-6 hover:bg-orange-400 hover:shadow"
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5">
              <Spinner />
            </div>
          ) : (
            "Place Order"
          )}
        </Button>
      ) : null}
    </>
  );
};

export default PlaceOrderBtn;
