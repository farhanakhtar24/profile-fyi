"use client";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Iproduct } from "@/interfaces/products";
import { updateCart } from "@/actions/post/updateCart";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { removedProductFromCart } from "@/actions/post/removedProductFromCart";

type Props = {
  quantity: number;
  userId: string | undefined;
  product: Iproduct;
};

const QuantitySelectorInput = ({ quantity, product, userId }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantity = async (operation: "increment" | "decrement") => {
    setIsUpdating(true);
    // check if product.stock is greater than quantity
    if (operation === "increment") {
      await updateCart({
        operation,
        quantity: 1,
        product,
        currentUserId: userId!,
      });
    } else {
      await updateCart({
        operation,
        quantity: 1,
        product,
        currentUserId: userId!,
      });
    }
    setIsUpdating(false);

    window.location.reload();
  };

  const handleRemove = async () => {
    setIsUpdating(true);
    await removedProductFromCart({
      product,
      currentUserId: userId!,
      quantity,
    });
    setIsUpdating(false);

    window.location.reload();
  };

  return (
    <div className="flex w-full items-center justify-between gap-2">
      {isUpdating ? (
        <div className="mx-auto h-5 w-5">
          <Spinner className="text-black" />
        </div>
      ) : (
        <>
          <div className="flex w-[15%] items-center justify-center gap-2">
            <button
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100"
              onClick={() => handleQuantity("decrement")}
            >
              <FiMinus />
            </button>
            <input
              type="number"
              value={currentQuantity}
              className="w-12 rounded border text-center"
              readOnly
            />
            <button
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => handleQuantity("increment")}
              disabled={quantity >= product.stock}
            >
              <GoPlus />
            </button>
          </div>
          <Button
            className="bg-red-700 hover:bg-red-400"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </>
      )}
    </div>
  );
};

export default QuantitySelectorInput;
