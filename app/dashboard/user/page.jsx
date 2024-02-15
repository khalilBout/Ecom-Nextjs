import React from "react";
// import Products from "@/app/components/dashboard/productPage/Products";
// import { getAllProducts } from "@/services/getData/product/index";
import getFilterUsers from "@/services/getData/user/getFilterUsers";
import Link from "next/link";
import TableUser from "../../components/dashboard/userPage/TableUser";
// import SearchComponent from "@/app/components/navbar/SearchComponent";
import PaginationCom from "@/app/components/shopPage/uiShop/PaginationCom";
//  import CategorySelect from "@/app/components/dashboard/productPage/CategorySelect";
//  import SearchComponent from "@/app/components/navbar/SearchComponent";

const page = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;

  const { allUser, count } = await getFilterUsers(search, page);

  return (
    <div class="w-full">
      <div class="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div class="flex justify-between mb-4 items-start">
          <div class="text-2xl p-2  font-medium">Manage User</div>
        </div>
        <div className="flex justify-between">
          <div class="w-full  flex justify-between items-center mb-4 ">
            {/* <SearchComponent /> */}
            <PaginationCom count={count} />
          </div>
        </div>
        <div></div>
        <div class="w-full">
          <TableUser allUser={allUser} />
        </div>
      </div>
    </div>
  );
};

export default page;
