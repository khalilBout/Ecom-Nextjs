import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="mdl:w-1/4  px-4 min-h-[60vh] bg-primeColor text-lightText py-4 transition-transform">
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
    </aside>
  );
};

export default Sidebar;
