import { getOrders } from "@/actions/get/getOrders";
import { auth } from "@/auth";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Not logged in</div>;
  }

  const orders = await getOrders(session?.user?.id);

  if (!orders) {
    return <div>Orders not found</div>;
  }

  console.log("orders", JSON.stringify(orders, null, 2));

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <Card className="flex h-full w-full">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
      </Card>
      <Card className="flex h-[66vh] w-full flex-col overflow-auto"></Card>
    </div>
  );
};

export default page;
