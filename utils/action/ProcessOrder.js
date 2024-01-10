"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProcessOrder({ orderID }) {
  const route = useRouter();
  // const id = order._id;
  // change data hir
  // const newDataOrder = {
  //   newClient: order.client,
  //   newOrderProduct: order.orderProduct,
  //   newShippingAddress: order.shippingAddress,
  // };

  const handelOrder = async (id) => {
    const res = await fetch(
      `http://localhost:3000/api/admin/orderAdmin/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        // body: JSON.stringify({ newDataOrder }),
      }
    );
    if (res.status === 200) {
      route.refresh();
    }
  };

  return (
    <button
      onClick={() => {
        handelOrder(orderID);
      }}
      className="bg-green-300 px-2 py-1 rounded-sm cursor-pointer"
    >
      Completed
    </button>
  );
}

// export default ProcessOrder;
