import { Card } from "@/components/ui/card";
import { Iorder } from "@/interfaces/orders";
import React from "react";
import OrderListItem from "./OrderListItem";

type Props = {
  orders: Iorder[];
};

const OrderList = ({ orders }: Props) => {
  return (
    <Card className="flex h-[66vh] w-full flex-col overflow-auto">
      {orders.map((order) => {
        return <OrderListItem key={order.id} order={order} />;
      })}
    </Card>
  );
};

export default OrderList;
