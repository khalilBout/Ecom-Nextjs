import React from "react";
import orderImg from "@/public/images/order.png";
import Image from "next/image";
// import BtnDelete from "@/utils/action/BtnDelete";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import BtnDelete from "@/utils/action/BtnDelete";
import DisplayOrder from "@/app/components/dashboard/userPage/DisplayOrder";
const TableUser = ({ allUser }) => {
  return (
    <>
      <table className="w-full min-w-[540px]">
        <thead>
          <tr>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              User Img
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              User Name
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Email
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Order
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <Image
                  src={item.url || orderImg}
                  alt={item.username}
                  className="w-8 h-10 rounded object-cover block"
                />
              </td>
              {/* user name  */}
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Link
                    href=""
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    {item?.username}
                  </Link>
                </div>
              </td>
              {/* user email   */}
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[14px] font-medium text-gray-600">
                  {item?.email}$
                </span>
              </td>

              {/* user Order  */}
              <td className="py-2 px-4 border-b border-b-gray-50">
                <DisplayOrder idUser={item?._id} />
              </td>

              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex gap-1">
                  {/* /admin/order/${order._id} */}
                  <Link href={`/dashboard/user/${item._id}`}>
                    <BiEdit size={22} color={"rgb(34,197,94)"}></BiEdit>
                  </Link>
                  <BtnDelete url={`/admin/userAdmin/${item._id}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
