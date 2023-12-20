import React from "react";
import Link from "next/link";
import BtnDelete from "@/utils/action/BtnDelete";
import ProcessOrder from "@/utils/action/ProcessOrder";
import { GrUpdate } from "react-icons/Gr";
import { AiOutlineCloudUpload } from "react-icons/Ai";

const Orders = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold"> {data?.length} Order</h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Process
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr className="bg-white" key={order._id}>
              <td className="px-6 py-2">{order?.shippingAddress.fullName}</td>
              <td className="px-6 py-2">{order?.client.userName}</td>

              <td className="px-6 py-2">
                {order.orderProduct?.map((item, ind) => (
                  <h2 key={ind}>{item.productTitle}</h2>
                ))}
              </td>
              <td className="px-6 py-2">
                {order.orderProduct?.map((item, ind) => (
                  <h2 key={ind}>
                    {item.quantity} X {item.finalPrice}{" "}
                  </h2>
                ))}
              </td>

              <td className="px-6 py-2">
                {order.orderProduct?.map((item, ind) => (
                  <h2 key={ind}>{item.PriceAfterDesc} </h2>
                ))}
              </td>
              <td className="px-6 py-2">{order?.shippingAddress.address}</td>
              <td className="px-6 py-2">{order?.shippingAddress.phone}</td>
              <td className="px-6 py-2">
                {order?.isProcess ? (
                  "Process"
                ) : (
                  <h2 className="bg-red-300 px-2 py-1 rounded-md">Dane</h2>
                )}
                {order?.isProcess ? (
                  <>
                    <ProcessOrder order={order} />
                  </>
                ) : (
                  <></>
                )}
              </td>

              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/dashbord/products//${order._id}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <GrUpdate size={12} />
                  </Link>
                  <BtnDelete url={`/admin/order/${order._id}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="mb-6">
      <CustomPagination
        resPerPage={data?.resPerPage}
        productsCount={data?.filteredProductsCount}
      />
    </div> */}
    </div>
  );
};

export default Orders;
