import React from "react";
import { getServerSession } from "next-auth";
import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import MyOrder from "@/app/components/profilePage/MyOrder";

const page = async () => {
  const { user } = await getServerSession();

  const { AllOrders } = await getAllOrderOfUser(user.email);

  return <MyOrder AllOrders={AllOrders} />;
};

export default page;
