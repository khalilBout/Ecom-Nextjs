import React from "react";
import Products from "@/app/components/dashboard/productPage/Products";
import { getAllProducts } from "@/services/getData/product/index";
import Link from "next/link";

const AllProducts = async () => {
  const data = await getAllProducts();
  return (
    <div>
      {/* navbar  */}
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
  );
};

export default AllProducts;
