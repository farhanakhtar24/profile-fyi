"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const AddToCartBtn = (props: Props) => {
  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Add to cart logic here
    console.log("Add to cart clicked");
  };
  return <Button onClick={handleAddToCartClick}>Add to Cart</Button>;
};

export default AddToCartBtn;
