import React from "react";
import { Iorder } from "@/interfaces/orders";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { CardTitle } from "@/components/ui/card";

type Props = {
  order: Iorder;
};

const OrderListItem = ({ order }: Props) => {
  const { id, createdAt, total, totalItems, orderStatus, orderItems } = order;
  return (
    <div key={id} className="flex flex-col gap-3 border-b border-gray-300 p-5">
      <div className="flex justify-between">
        <div className="text-lg font-semibold text-gray-700">
          Order ID: #{id}
        </div>
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
        <div className="text-xl font-bold">
          Total:{" "}
          {total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div>Total Items: {totalItems}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Status:{" "}
          <span className="font-bold uppercase text-green-600">
            {orderStatus}
          </span>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger>Products</AccordionTrigger>
          <AccordionContent className="grid w-full grid-cols-2 gap-5">
            {orderItems.map((item, idx) => {
              const { quantity } = item;
              const { id, title, price, thumbnail, discountPercentage } =
                item.product;
              const formattedPrice = price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              });

              let originalPrice = 0;
              if (discountPercentage) {
                originalPrice = price / (1 - discountPercentage / 100);
              }
              return (
                <div className="flex gap-5 rounded border p-5" key={idx}>
                  <Image
                    src={thumbnail}
                    alt={title}
                    width={999}
                    height={999}
                    className="aspect-square h-auto w-[15%]"
                  />
                  <div className="flex w-[85%] flex-col justify-between">
                    <p className="text-xl font-semibold">{title}</p>
                    <div className="flex w-full flex-col gap-2">
                      <p className="text-sm text-gray-600">
                        Quantity: {quantity}
                      </p>
                      <div className="flex items-baseline gap-3">
                        <CardTitle>{formattedPrice}</CardTitle>
                        {originalPrice > 0 && (
                          <p className="text-sm text-gray-500 line-through">
                            {originalPrice.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                        )}
                        {discountPercentage && (
                          <p className="text-sm font-semibold text-green-700">
                            {discountPercentage}% off
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrderListItem;
