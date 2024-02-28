"";
import React from "react";
import productNoImg from "@/public/productNoImg.png";
import Image from "next/image";
import BtnDelete from "@/utils/action/BtnDelete";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

// import ProcessOrder from "@/utils/action/ProcessOrder";
const TableAllProduct = ({ data }) => {
  return (
    <>
      <table
        className="w-full min-w-[540px]"
        data-tab-for="product"
        data-page="active"
      >
        <thead>
          <tr>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              Image
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Product
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Price
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Discount
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Category
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              details
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => (
            <Tr item={product} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAllProduct;

function Tr({ item }) {
  const {
    _id,
    title,
    price,
    priceDrop,
    category,
    listModels,
    type,
    createdAt,
  } = item;
  // const {size, selectedColor, url}=listModels

  const StokeOfModel = listModels?.map((item) => {
    const value = item.size.map((x) => x.stoke);
    const total = value.reduce((a, c) => a + c, 0);
    return total;
  });
  const globalStoke = StokeOfModel?.reduce((a, c) => a + c, 0);

  return (
    <>
      <tr className="bg-red-100">
        {/* Image  */}
        <td className="py-2 px-4 border-b border-b-gray-50 ">
          <div className="relative h-[60px] w-[60px]">
            <Image
              fill
              quality={100}
              objectFit="cover"
              objectPosition="center"
              src={listModels[0].url[0].urlImage || productNoImg}
              alt={title}
              className="rounded-full object-cover overflow-hidden bg-teal-100"
              // className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
            />
          </div>
        </td>

        {/* name of product  */}
        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">{title}</span>
        </td>
        {/* Price of product  */}
        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">
            {price} $
          </span>
        </td>
        {/* Price Drop of product  */}
        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="text-[14px] font-medium text-gray-700">
            {priceDrop} %
          </span>
        </td>
        {/*category of product  */}
        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="text-[15px] font-medium text-gray-600">
            {category}
          </span>
        </td>
        {/*Detail of product  */}

        <td className="py-2 px-4 border-b border-b-gray-50">
          {listModels?.map((item, index) => (
            <span key={index} className="flex gap-1 justify-start items-center">
              <span
                className={`border border-gray-400 mx-2 w-[20px] h-[20px] rounded-full bg-[${item?.selectedColor}]`}
                style={{
                  borderRadius: "100%",
                  backgroundColor: item?.selectedColor,
                  display: "inline-block",
                }}
              ></span>
              <span className="">
                {item?.size.map((x, i) => (
                  <span
                    key={i}
                    className="text-[14px] font-medium text-gray-600 bg-gray-200 rounded-md px-2 mx-1"
                  >
                    {x?.theSize}:
                    <span className="text-red-600">{x?.stoke} Pic</span>
                  </span>
                ))}
              </span>
            </span>
          ))}
        </td>

        {/* Actions  */}

        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="flex gap-1">
            <Link
              href={`/dashboard/products/updateProduct/${_id}`}
              className="cursor-pointer"
            >
              <BiEdit size={20} color={"rgb(34,197,94)"}></BiEdit>
            </Link>
            <BtnDelete url={`/admin/productAdmin/${_id}`} />
          </span>
        </td>
      </tr>
    </>
  );
}
