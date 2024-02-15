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
    <div className="w-full m-4 ">
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="py-2 text-2xl text-gray-600 font-medium">
            Manage orders
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <StateSelect />
          <PaginationCom count={count} />
        </div>
        <div className="overflow-x-auto">
          {count > 0 ? (
            <TableOrder allOrder={allOrder} />
          ) : (
            <div className="flex justify-center items-center w-full my-2 py-8 bg-slate-200 rounded-md">
              <p className=" text-2xl font-bodyFont text-red-400">
                {" "}
                No Orders...{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
{
  /* <Orders data={data} />; */
}
