import React from "react";
import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import Link from "next/link";
const DisplayOrder = async ({ idUser }) => {
  const { AllOrders } = await getAllOrderOfUser(idUser);
  const count = AllOrders?.length;

  return (
    <>
      {AllOrders?.length > 0 ? (
        <div className="w-[90px] ">
          <Link
            href={`/dashboard/user/${idUser}`}
            className="px-2 py-1 text-[14px] text-gray-500 bg-gray-300 rounded-md cursor-pointer"
          >
            {count} Order
          </Link>
        </div>
      ) : (
        <h2 className="w-[90px] px-2 py-1 text-[14px] text-gray-500 bg-red-200 rounded-md">
          No Order
        </h2>
      )}
    </>
  );
};

export default DisplayOrder;
