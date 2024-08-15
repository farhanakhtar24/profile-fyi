import React from "react";

type Props = {
  params: {
    searchId: string;
  };
};

const page = async ({ params }: Props) => {
  const { searchId } = params;

  return <div>{}</div>;
};

export default page;
