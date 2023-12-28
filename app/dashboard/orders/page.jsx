import React from "react";
import Orders from "@/app/components/dashboard/orderPage/Orders";
import TableOrder from "@/app/components/dashboard/orderPage/TableOrder";

import { getAllOrders } from "@/services/getData/order/index";

const AllOrders = async () => {
  const data = await getAllOrders();
  return (
    <div class="w-full m-4 ">
      <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div class="flex justify-between mb-4 items-start">
          <div class="font-medium">Manage orders</div>
        </div>
        <div class="flex items-center mb-4 order-tab">
          <button
            type="button"
            data-tab="order"
            data-tab-page="active"
            class="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active"
          >
            All
          </button>
          <button
            type="button"
            data-tab="order"
            data-tab-page="completed"
            class="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-gray-600"
          >
            Processing
          </button>
          <button
            type="button"
            data-tab="order"
            data-tab-page="canceled"
            class="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tr-md rounded-br-md hover:text-gray-600"
          >
            Completed
          </button>
        </div>
        <div class="overflow-x-auto">
          <TableOrder />
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
{
  /* <Orders data={data} />; */
}
