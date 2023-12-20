import React from "react";
import Orders from "@/app/components/dashboard/orderPage/Orders";
getAllOrders;
import { getAllOrders } from "@/services/getData/order/index";

const AllOrders = async () => {
  const data = await getAllOrders();
  return (
    <>
      <Orders data={data} />;
    </>
  );
};

export default AllOrders;
