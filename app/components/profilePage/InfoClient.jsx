"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UserImg from "@/public/images/user.png";
import bagImg from "@/public/images/bag.png";

import { useSelector } from "react-redux";

const InfoClient = ({ user }) => {
  const cart = useSelector((state) => state.Cart.cartProducts);
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  // const userId = user?.id;

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("id", userId);
  //   replace(`${pathname}?${params}`);
  // }, [userId]);

  return (
    <>
      <figure className="flex items-start sm:items-center">
        <div className="relative w-[90px] h-[90px] m-4">
          <Image
            quality={100}
            src={user?.image || UserImg}
            alt={user?.name}
            fill
            className=" rounded-full mr-4 bg-blue-100 "
          />
        </div>
        <div>
          <p className="text-gray-700 font-bodyFont text-xl">{user?.name}</p>
          <p className="text-gray-700 font-bodyFont text-xl">{user?.email}</p>
        </div>
      </figure>

      <hr className="my-4" />

      <div className="mb-5 gap-4">
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer  items-center">
          <div className="mr-3 px-12 flex items-center">
            <div className="relative bg-blue-100 flex items-center justify-center w-[160px] h-[160px] p-8 rounded-full shadow mt-2">
              <Image src={bagImg} alt="bagImage" width={120} height={120} />
            </div>
          </div>
          <div className="text-gray-600 h-full flex items-center ">
            <h2 className=" text-gray-900 font-bodyFont text-2xl">
              My Card:{" "}
              <span className="text-gray-600 font-bodyFont text-xl">
                ({cart.length}) Products
              </span>
            </h2>
          </div>
        </figure>
      </div>
      <div className="flex justify-end gap-4 ">
        {cart?.length > 0 && (
          <Link href="/checkout" className="">
            <button className="flex gap-2 items-center px-4 py-2 border border-gray-300 bg-red-400 rounded-md hover:bg-red-200">
              Checkout
            </button>
          </Link>
        )}
        <Link href="/shop" className="">
          <button className="flex gap-2 items-center px-4 py-2  border border-gray-300 bg-green-400 rounded-md hover:bg-green-200">
            <CiShoppingCart size={18} /> Go To Shopping
          </button>
        </Link>
      </div>
    </>
  );
};

export default InfoClient;
