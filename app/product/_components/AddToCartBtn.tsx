"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/actions/post/addToCart";
import { Iproduct } from "@/interfaces/products";
import Spinner from "@/components/Spinner/Spinner";

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

    setLoading(true);
    if (!userId) {
      return console.error("User not logged in");
    }

    const cartBody = {
      product: product,
      quantity: 1,
      currentUserId: userId,
    };

    await addToCart(cartBody);

    setLoading(false);

    console.log("Add to cart clicked");
  };

  return (
    <Button
      onClick={handleAddToCartClick}
      className="w-28 bg-cyan-800 hover:bg-cyan-600"
      disabled={loading}
    >
      {loading ? (
        <div className="h-5 w-5">
          <Spinner />
        </div>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};

export default AddToCartBtn;
