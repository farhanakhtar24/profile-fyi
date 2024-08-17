import React from "react";
import { ImSpinner2 } from "react-icons/im";

type Props = {};

const Spinner = (props: Props) => {
  return <ImSpinner2 className="h-full w-full animate-spin text-white" />;
};

export default Spinner;
