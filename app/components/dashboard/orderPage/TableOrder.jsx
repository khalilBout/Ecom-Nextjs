import React from "react";
import orderImg from "@/public/images/order.png";
import Image from "next/image";
import BtnDelete from "@/utils/action/BtnDelete";
import ProcessOrder from "@/utils/action/ProcessOrder";
import Link from "next/link";
const TableOrder = ({ allOrder }) => {
  return (
    <>
      <table className="w-full min-w-[540px]">
        <thead>
          <tr>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              Client
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Product
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Total
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Address
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Phone
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allOrder?.map((order, ind) => (
            <tr key={ind}>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Link
                    href=""
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    {order?.shippingAddress?.clientName}
                  </Link>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                {order?.orderProduct?.map((ProductItem, index) => (
                  <div key={index} className="flex gap-2 my-1">
                    <Image
                      src={ProductItem.url || orderImg}
                      alt={ProductItem.productTitle}
                      className="w-8 h-10 rounded object-cover block"
                    />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-medium text-gray-700">
                        {ProductItem?.productTitle}
                      </span>
                      <div className="flex justify-between items-center gap-1">
                        <span
                          className="rounded-full"
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "100%",
                            backgroundColor: ProductItem.Color,
                            display: "inline-block",
                          }}
                        ></span>
                        <span className="text-[13px] font-medium text-gray-500">
                          {ProductItem.sizeSelect} - {ProductItem.quantity} Pic
                          * {ProductItem.finalPrice} $
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[14px] font-medium text-gray-600">
                  {order?.totolPyment}$
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  {order?.shippingAddress?.address}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  {order?.shippingAddress?.phone}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex gap-1">
                  {order?.isProcess ? (
                    <>
                      <ProcessOrder orderID={`${order._id}`} />
                    </>
                  ) : (
                    <span className="w-[65px] inline-block p-1 rounded bg-emerald-500/10 text-gray-600 font-medium text-[14px] leading-none">
                      Dane
                    </span>
                  )}
                  {/* /admin/order/${order._id} */}
                  <BtnDelete url={`/admin/order/${order._id}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableOrder;
