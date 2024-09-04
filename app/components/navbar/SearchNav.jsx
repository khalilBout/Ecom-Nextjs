"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { motion } from "framer-motion";

import SearchInput from "@/app/components/navbar/SearchInput";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative flex justify-center">
        <div className=" lgl:w-[750px] px-6 py-6">
          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
