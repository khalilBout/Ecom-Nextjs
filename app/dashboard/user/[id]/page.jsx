import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import { getUserFromAdmin } from "@/services/getData/user";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;

  const { AllOrders } = await getAllOrderOfUser(id);
  const data = await getUserFromAdmin(id);

  console.log("All Orders:", AllOrders);
  console.log("the user:", data);

  return (
    <>
      <h1>id: {id} </h1>
      <h1>user page .</h1>
    </>
  );
};

export default page;
