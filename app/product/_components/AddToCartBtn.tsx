"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/actions/post/addToCart";
import { Iproduct } from "@/interfaces/products";

type Props = {
  product: Iproduct;
  userId: string | undefined;
};

const AddToCartBtn = ({ product, userId }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCartClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (!userId) {
      return console.log("User not logged in");
    }

    console.log("product", product);
    console.log("session.user.id", userId);

    const cartBody = {
      product: product,
      quantity: 1,
      currentUserId: userId,
    };

    await addToCart(cartBody);

    // Add to cart logic here
    console.log("Add to cart clicked");
  };

  return (
    <Button
      onClick={(e) => {
        setLoading(true);
        handleAddToCartClick(e);
        setLoading(false);
      }}
      className="bg-cyan-800 hover:bg-cyan-600"
    >
      {loading ? "Adding to cart..." : "Add to cart"}
    </Button>
  );
};

export default AddToCartBtn;
