import { auth } from "@/auth";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import OrderList from "./_components/OrderList";
import { getAllOrders } from "@/actions/get/getAllOrders";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Not logged in</div>;
  }

  const orders = await getAllOrders(session?.user?.id);

  if (!orders) {
    return <div>Orders not found</div>;
  }

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <Card className="flex h-full w-full">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
      </Card>
      <OrderList orders={orders} />
    </div>
  );
};

export default page;
