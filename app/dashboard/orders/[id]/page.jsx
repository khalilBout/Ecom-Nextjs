import React from "react";
import { getOrderById } from "@/services/getData/order";
import OrderUpdate from "@/app/components/dashboard/orderPage/OrderUpdate";
import OrderInfo from "@/app/components/dashboard/orderPage/OrderInfo";
const page = async ({ params }) => {
  const id = params.id;
  const data = await getOrderById(id);

  console.log("order:", data);

  return (
    <p> ID:{id}</p>
    // <div className="w-full m-2">
    //   <h2 className="text-2xl font-titleFont m-2 ">
    //     Update Order:
    //     <span className="text-red-400 text-[14px] px-2">{data._id}</span>
    //   </h2>
    //   {data.isProcess ? (
    //     <>
    //       <OrderUpdate order={data} />
    //     </>
    //   ) : (
    //     <>
    //       <OrderInfo order={data} />
    //     </>
    //   )}
    //   {/* <OrderUpdate order={data} /> */}
    // </div>
  );
};

export default page;
