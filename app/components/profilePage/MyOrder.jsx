import React from "react";
import OrderItem from "@/app/components/profilePage/OrderItem";
const MyOrder = ({ AllOrders }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-5">My Orders</h3>
      {AllOrders?.map((order, index) => (
        <OrderItem key={index} order={order} index={index} />
      ))}
    </>
  );
};

export default MyOrder;
