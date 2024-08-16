"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { addToCart } from "@/actions/post/addToCart";

type Props = {
  quantity: number;
};

const QuantitySelectorInput = ({ quantity }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantity = (operation: "increment" | "decrement") => {
    if (operation === "increment") {
      // addToCart({
      // currentUserId,
      // product,
      // quantity,
      // });
    }
  };

  return (
    <div className="flex w-[15%] items-center justify-center gap-2">
      <div
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100"
        onClick={() => handleQuantity("increment")}
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
        onClick={() => handleQuantity("decrement")}
      >
        <GoPlus />
      </div>
    </div>
  );
};

export default QuantitySelectorInput;
