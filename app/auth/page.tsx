import React from "react";
import AuthTabs from "./_components/AuthTabs";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <AuthTabs />
    </div>
  );
};

export default page;
