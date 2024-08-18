import React from "react";

type Props = {
  params: {
    orderId: string;
  };
};

const page = ({ params }: Props) => {
  const { orderId } = params;
  return <div>{orderId}</div>;
};

export default page;
