import { getCart } from "@/actions/get/getCart";
import { auth } from "@/auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Not logged in</div>;
  }

  const cart = await getCart(session?.user?.id);

  if (!cart) {
    return <div>Cart not found</div>;
  }

  return <div>page</div>;
};

export default page;
