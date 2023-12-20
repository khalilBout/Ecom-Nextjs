"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { useDebouncedCallback } from "use-debounce";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { GlobalContext } from "@/services/context/GlobalContext";

const SearchBar = () => {
  const { cart } = useContext(GlobalContext);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

  return (
    <>
      <div className="w-full bg-[#F5F5F3] relative">
        <div className="max-w-container mx-auto">
          <div className=" flex flex-col lg:flex-row lg:items-center justify-between w-full px-4 pb-4 lg:mb-2 h-full lg:h-20">
            {/* category bar */}
            <div
              className="flex h-12 cursor-pointer items-center gap-2 text-primeColor"
              onClick={() => setShow(!show)}
            >
              <HiOutlineMenuAlt4 className="w-5 h-5" />
              <p className="text-[14px] font-normal">Shop by Category</p>
              {show && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
                >
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Man
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Women
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Children
                  </li>
                </motion.ul>
              )}
            </div>
            {/* search bar */}
            <div className="relative w-full lg:w-[500px] h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
              <input
                className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                placeholder="Search your products here"
              />
              <FaSearch className="w-5 h-5" />
            </div>
            {/* user bar */}
            <div className="flex gap-4 mt-2 lg:mt-0 justify-end items-center pr-6 cursor-pointer relative">
              <div onClick={() => setShowUser(!showUser)} className="flex ">
                <FaUser size={22} />
                <FaCaretDown size={22} />
              </div>
              {showUser && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-8 right-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                >
                  <Link href="/account/login">
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Login
                    </li>
                  </Link>
                  <Link
                    onClick={() => setShowUser(false)}
                    href="/account/register"
                  >
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Sign Up
                    </li>
                  </Link>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Others
                  </li>
                </motion.ul>
              )}
              <Link href="/card">
                <div className="relative">
                  <FaShoppingCart />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                    {/* {products.length > 0 ? products.length : 0} */}
                    {cart?.cartItems ? <> {cart?.cartItems.length} </> : <>0</>}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
