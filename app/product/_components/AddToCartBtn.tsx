"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/actions/post/addToCart";
import { useSession } from "next-auth/react";

type Props = {
  productId: number;
};

const AddToCartBtn = ({ productId }: Props) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  const handleAddToCartClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (!session?.user?.id) {
      return console.log("User not logged in");
    }

    await addToCart(productId, session.user.id);

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
