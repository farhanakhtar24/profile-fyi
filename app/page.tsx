import { auth } from "@/auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();

  if (!session) {
    return <div>Please Log In to continue</div>;
  }

  return <div>Home</div>;
};

export default page;
