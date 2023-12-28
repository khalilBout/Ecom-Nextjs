import React from "react";
import orderImg from "@/public/images/order.png";
import Image from "next/image";
const TableOrder = () => {
  return (
    <>
      <table
        className="w-full min-w-[540px]"
        data-tab-for="order"
        data-page="active"
      >
        <thead>
          <tr>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              Service
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Estimate
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Budget
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Image
                  src={orderImg}
                  alt=""
                  className="w-8 h-8 rounded object-cover block"
                />
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  Create landing page
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">
                3 days
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">$56</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                In progress
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Image
                  src={orderImg}
                  alt="order1"
                  className="w-8 h-8 rounded object-cover block"
                />
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  Create landing page
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">
                3 days
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">$56</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                In progress
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Image
                  src={orderImg}
                  alt=""
                  className="w-8 h-8 rounded object-cover block"
                />
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  Create landing page
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">
                3 days
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">$56</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                In progress
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Image
                  src={orderImg}
                  alt="order2"
                  className="w-8 h-8 rounded object-cover block"
                />
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  Create landing page
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">
                3 days
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">$56</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                In progress
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Image
                  src={orderImg}
                  alt="order3"
                  className="w-8 h-8 rounded object-cover block"
                />
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  Create landing page
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">
                3 days
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium text-gray-400">$56</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                In progress
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableOrder;
