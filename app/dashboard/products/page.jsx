import React from "react";
import Products from "@/app/components/dashboard/productPage/Products";
import { getAllProducts } from "@/services/getData/product/index";
import Link from "next/link";
import TableProduct from "../../components/dashboard/productPage/TableProduct";

const AllProducts = async () => {
  const data = await getAllProducts();
  return (
    <div class="">
      <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div class="flex justify-between mb-4 items-start">
          <div class="font-medium">Manage Products</div>
        </div>
        <div className="flex justify-between">
          <div class="flex items-center mb-4 ">
            <button
              type="button"
              data-tab="order"
              data-tab-page="active"
              className="mx-1 text-sm font-medium py-2 px-4 rounded-tl-md rounded-md  bg-gray-300 text-primeColor hover:text-lightText hover:bg-primeColor"
            >
              All
            </button>
            <button
              type="button"
              data-tab="order"
              data-tab-page="completed"
              className="mx-1 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-gray-300 text-primeColor hover:text-lightText hover:bg-primeColor"
            >
              On Stoke
            </button>
            <button
              type="button"
              data-tab="order"
              data-tab-page="canceled"
              className="mx-1 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-gray-300 text-primeColor hover:text-lightText hover:bg-primeColor"
            >
              Seller
            </button>
          </div>
          <Link href="/dashboard/products/addProduct">
            <button className="h-[30px] flex justify-center items-center bg-green-400 text-white px-2 py-1 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-gray-800">
              Add Product
            </button>
          </Link>
        </div>
        <div class="w-[90%]">
          <TableProduct data={data} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
{
  /* <div>
      
      <div className="">
        <ul className="flex gap-2">
          <li>
            <Link
              href="/dashboard/products"
              className=" bg-red-300 px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              all Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products/addProduct"
              className=" bg-red-300 px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Add Product
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Products data={data} />
      </div>
    </div>
   */
}
