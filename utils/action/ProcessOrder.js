"use client";
import React from "react";

const ProcessOrder = ({ order }) => {
  // change data hir
  const newDataOrder = {
    newClient: order.client,
    newOrderProduct: order.orderProduct,
    newShippingAddress: order.shippingAddress,
  };

  const handelOrder = async (order) => {
    const res = await fetch(
      `http://localhost:3000/api/admin/orderAdmin/${order._id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newDataOrder }),
      }
    );
  };

  //   console.log("handel Order...", order);

  return (
    <button
      onClick={() => {
        handelOrder(order);
      }}
      className="bg-green-300 px-2 py-1 rounded-sm cursor-pointer"
    >
      Completed
    </button>
  );
};

export default ProcessOrder;
