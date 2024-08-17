import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const PlaceOrderBtn = (props: Props) => {
  return (
    <Button className="m-5 rounded-sm bg-orange-500 py-6 hover:bg-orange-400 hover:shadow">
      Place Order
    </Button>
  );
};

export default PlaceOrderBtn;
