import { Iorder } from "@/interfaces/orders";
import Link from "next/link";
import React from "react";

type Props = {
  order: Iorder;
};

const OrderListItem = ({ order }: Props) => {
  const { id, createdAt, total, totalItems, orderStatus } = order;
  return (
    <Link
      key={id}
      className="flex flex-col gap-3 border-b border-gray-300 p-5"
      href={`/orders/${id}`}
    >
      <div className="flex justify-between">
        <div>Order ID: {id}</div>
        <div className="flex gap-3">
          {/* // show time */}
          <span>
            {createdAt.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          ,{/* // show date */}
          <span>
            {createdAt.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Total:{" "}
          {total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div>Total Items: {totalItems}</div>
      </div>
      <div className="flex justify-between">
        <div>Status: {orderStatus}</div>
      </div>
    </Link>
  );
};

export default OrderListItem;
