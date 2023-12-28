import React from "react";
import userImg from "@/public/images/user.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="w-full mdl:w-3/4  min-h-screen transition-all main">
        {/* top section */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <Link href="dashboard/user" className="flex justify-between mb-4">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">324</div>
                    <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                      +30%
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">User</div>
                </div>
              </Link>
              <div className="flex items-center">
                <Image
                  src={userImg}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block"
                />
                <Image
                  src={userImg}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block"
                />
                <Image
                  src={userImg}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block"
                />
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">
                    <span className="text-base font-normal text-gray-400 align-top">
                      order
                    </span>
                    2,345
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    Active orders
                  </div>
                </div>
              </div>
              <Link
                href="/dashboard/orders"
                className="text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                View details
              </Link>
            </div>
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">
                    <span className="text-base font-normal text-gray-400 align-top">
                      product
                    </span>
                    3,187
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    Product On Stoke
                  </div>
                </div>
              </div>
              <Link
                href="/dashboard/products"
                className="text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
