"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InfoClient = ({ user }) => {
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
            src={user?.image}
            alt={user?.name}
            fill
            className=" rounded-full mr-4 bg-green-100 "
          />
        </div>
        <figcaption>
          <h5 className="font-semibold text-lg">{user?.name}</h5>
          <p>{user?.email}</p>
        </figcaption>
      </figure>

      <hr className="my-4" />

      <div className="mb-5 gap-4">
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
          <div className="mr-3">
            <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow mt-2">
              <FiShoppingBag />
            </span>
          </div>
          <figcaption className="text-gray-600">
            <div>
              <h2 className="text-gray-900 font-bold text-[18px]">
                {" "}
                My Card:{" "}
                <span className="text-gray-600 text-[16px]">
                  {" "}
                  02 Products{" "}
                </span>{" "}
              </h2>
              <h2 className="text-gray-900 font-bold">
                {" "}
                My Order: <span className="text-gray-600">
                  {" "}
                  04 Orders{" "}
                </span>{" "}
              </h2>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex justify-end ">
        <Link href="/shop" className="">
          <button className="flex gap-2 items-center px-4 py-2 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
            <CiShoppingCart size={18} /> Go To Shopping
          </button>
        </Link>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default InfoClient;
