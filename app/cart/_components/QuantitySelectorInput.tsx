"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Iproduct } from "@/interfaces/products";
import { updateCart } from "@/actions/post/updateCart";

type Props = {
  quantity: number;
  userId: string | undefined;
  product: Iproduct;
};

const QuantitySelectorInput = ({ quantity, product, userId }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantity = async (operation: "increment" | "decrement") => {
    if (operation === "increment") {
      await updateCart({
        operation,
        quantity: 1,
        product,
        currentUserId: userId!,
      });

      setCurrentQuantity(currentQuantity + 1);
    } else {
      await updateCart({
        operation,
        quantity: 1,
        product,
        currentUserId: userId!,
      });

      setCurrentQuantity(currentQuantity - 1);
    }
  };

  return (
    <div className="flex w-[15%] items-center justify-center gap-2">
      <div
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100"
        onClick={() => handleQuantity("decrement")}
      >
        <FiMinus className="" />
      </div>
      <input
        type="number"
        value={currentQuantity}
        className="w-12 rounded border text-center"
      />
      <div
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100"
        onClick={() => handleQuantity("increment")}
      >
        <GoPlus />
      </div>
    </div>
  );
};

export default QuantitySelectorInput;
