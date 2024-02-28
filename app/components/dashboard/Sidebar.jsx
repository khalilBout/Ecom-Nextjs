"use client";
import React from "react";
import Link from "next/link";
import AdminImg from "@/public/images/admin.png";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <aside className="md:w-1/5 lg:w-1/6 bg-gray-100 ">
      <div className="flex item-center justify-between px-4 md:flex-col">
        <div className="hidden md:flex justify-center item-center ">
          <Link href="/profile" className="relative w-[60px] h-[60px] m-4">
            <Image
              quality={100}
              src={AdminImg}
              alt="admin"
              fill
              className=" rounded-full mr-4 bg-green-100 "
            />
          </Link>
        </div>

        <ul className="grow py-2 sidebar font-bodyFont flex md:flex-col items-center justify-around ">
          <li>
            <Link
              href="/dashboard/products"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Products
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>

          <li>
            <Link
              // href="/profile/order"
              href="/dashboard/orders"
              className="block px-4 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              // href="/profile/order"
              href="/dashboard/user"
              className="block px-4 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Users
            </Link>
          </li>
        </ul>
        <hr border />
        <div className="w-full flex justify-center ">
          <button
            // href='/profile'
            className="mt-0 md:mt-6 px-2 py-1 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

{
  /* <aside className="mdl:w-1/4  px-4 min-h-[60vh] bg-primeColor text-lightText py-4 transition-transform">
      <div className="w-full h-[40px] flex justify-center items-center py-4">
        <Link
          href="/dashboard"
          className="text-2xl text-red-500 cursor-pointer "
        >
          Dashboard
        </Link>
      </div>
      <div className="h-[90%] flex flex-col justify-between ">
        <ul className=" ">
          <li>
            <Link
              href="/dashboard/products"
              className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/orders"
              className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Orders
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/user"
              className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Users
            </Link>
          </li>

          <hr />
        </ul>

        <ul className=" ">
          <li>
            <Link
              href="#"
              className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-3 py- hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </aside> */
}
