"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import Link from "next/link";

const Category = () => {
  const [showCategory, setShowCategory] = useState(true);

  const items = ["man", "woman", "children"];
  return (
    <div>
      <div
        onClick={() => setShowCategory(!showCategory)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Category" icons={true} />
      </div>
      {showCategory && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            <li key="all">
              <Link
                href={{
                  pathname: "/shop",
                  query: {
                    category: "",
                  },
                }}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
              >
                All Category
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: "/shop",
                    query: {
                      category: item,
                    },
                  }}
                  className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
                  prefetch={false}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Category;
