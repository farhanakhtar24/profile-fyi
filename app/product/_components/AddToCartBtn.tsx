"use client";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

const AddToCartBtn = (props: Props) => {
  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Add to cart logic here
    console.log("Add to cart clicked");
  };
  return (
    <Button
      onClick={handleAddToCartClick}
      className="bg-cyan-800 hover:bg-cyan-600"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
