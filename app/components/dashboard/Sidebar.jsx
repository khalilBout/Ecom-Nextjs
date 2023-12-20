import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul className="sidebar">
        <>
          <li>
            <Link
              href="/dashboard/products"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/orders"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Orders
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/user"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              Users
            </Link>
          </li>
          {/*  */}
          <hr />
        </>
        <li>
          <Link
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Update Profile
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
          >
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
