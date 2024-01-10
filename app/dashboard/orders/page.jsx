import React from "react";
import Orders from "@/app/components/dashboard/orderPage/Orders";
import TableOrder from "@/app/components/dashboard/orderPage/TableOrder";
import StateSelect from "@/app/components/dashboard/orderPage/StateSelect";
import PaginationCom from "@/app/components/shopPage/uiShop/PaginationCom";

// import { getAllOrders } from "@/services/getData/order/index";
import getOrderByFilter from "@/services/getData/order/getOrderByFilter";

const AllOrders = async ({ searchParams }) => {
  const state = searchParams?.state || "";
  const page = searchParams?.page || 1;

  const { count, allOrder } = await getOrderByFilter(state, page);

  return (
    <div class="w-full m-4 ">
      <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div class="flex justify-between mb-4 items-start">
          <div class="py-2 text-2xl text-gray-600 font-medium">
            Manage orders
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <StateSelect />
          <PaginationCom count={count} />
        </div>
        <div class="overflow-x-auto">
          <TableOrder allOrder={allOrder} />
          {/* <Orders data={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
{
  /* <Orders data={data} />; */
}
