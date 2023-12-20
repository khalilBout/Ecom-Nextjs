import React from "react";
import Link from "next/link";
import BtnDelete from "@/utils/action/BtnDelete";
import { GrUpdate } from "react-icons/Gr";
import { AiOutlineCloudUpload } from "react-icons/Ai";

GrUpdate;

const Products = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold"> {data?.length} Products</h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <tr className="bg-white">
              <td className="px-6 py-2">{product?.title}</td>
              <td className="px-6 py-2">{product?.stock}</td>
              <td className="px-6 py-2">${product?.price}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/dashboard/products/updateProduct/${product._id}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <GrUpdate size={12} />
                  </Link>
                  <BtnDelete url={`/admin/productAdmin/${product._id}`} />
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

export default Products;
