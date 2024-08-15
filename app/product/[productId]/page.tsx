import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

export const dynamic = "force-dynamic";

const page = ({ params }: Props) => {
  const { productId } = params;

  return <div>{productId}</div>;
};

export default page;
