import React from "react";
// import Products from "@/app/components/dashboard/productPage/Products";
// import { getAllProducts } from "@/services/getData/product/index";
import { getProducts } from "@/services/getData/product/getFilterData";
import Link from "next/link";
import TableAllProduct from "../../components/dashboard/productPage/TableAllProduct";
import CategorySelect from "@/app/components/dashboard/productPage/CategorySelect";
import SearchComponent from "@/app/components/navbar/SearchInput";
import PaginationCom from "@/app/components/shopPage/uiShop/PaginationCom";

const AllProducts = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const category = searchParams?.category || "";

  const { allProducts, count } = await getProducts(search, page, category);

  return (
    <div className="w-full">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="text-2xl p-2  font-medium">Manage Products</div>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <CategorySelect />
            <div className="mr-4 grow">
              <SearchComponent />
            </div>
            <PaginationCom count={count} />
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/products/addProduct">
                <button className="mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  Add Product
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-full">
          <TableAllProduct data={allProducts} />
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
