"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import UserImg from "@/public/images/user.png";

const Sidebar = () => {
  //   const { user } = useContext(AuthContext);
  const session = useSession();
  const cart = useSelector((state) => state.Cart.cartProducts);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <aside className="md:w-1/5 lg:w-1/6 px-1 ">
      {session && session.status === "authenticated" && (
        <div className="flex item-center justify-between px-4 md:flex-col">
          <div className="hidden md:flex justify-center item-center ">
            <Link href="/profile" className="relative w-[60px] h-[60px] m-4">
              <Image
                quality={100}
                src={session?.data.user.image || UserImg}
                alt={session?.data.user.name}
                fill
                className=" rounded-full mr-4 bg-green-100 "
              />
            </Link>
          </div>

          <ul className="grow py-2 sidebar font-bodyFont flex md:flex-col items-center justify-around ">
            <li>
              <Link
                href="/profile/card"
                className="block px-1 my-1 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                My Card <span className="text-red-300">({cart.length})</span>
              </Link>
            </li>

            <li>
              <Link
                href="/profile/order"
                className="block px-1 my-1 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                My Orders
              </Link>
            </li>

            <li>
              <button
                // href='/profile'
                className="block px-2 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
