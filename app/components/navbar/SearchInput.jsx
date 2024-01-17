"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { motion } from "framer-motion";

import SearchComponent from "@/app/components/navbar/SearchComponent";
import UserData from "@/app/components/navbar/UserData";
import CardData from "./CardData";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full bg-[#F5F5F3] relative">
        <div className="max-w-container mx-auto">
          <div className=" flex flex-col lg:flex-row lg:items-center justify-between w-full px-4 pb-4  h-full lg:h-20">
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
            <div>
              <SearchComponent />
            </div>
            {/* user and card bar */}

            <div className="flex gap-4 mt-2 lg:mt-0 justify-end items-center pr-6 cursor-pointer ">
              <UserData />
              <CardData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
