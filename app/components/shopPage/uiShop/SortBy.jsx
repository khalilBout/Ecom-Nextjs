import React from "react";
import { GoTriangleDown } from "react-icons/go";

const SortBy = () => {
  return (
    <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
      <div className="flex items-center gap-2 text-base text-[#767676] relative">
        <label className="block">Sort by:</label>
        <select
          // onChange={(e) => setSelected(e.target.value)}
          id="countries"
          className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
        >
          <option value="Best Sellers">Best Sellers</option>
          <option value="New Arrival">New Arrival</option>
          <option value="Featured">Featured</option>
          <option value="Final Offer">Final Offer</option>
        </select>
        <span className="absolute text-sm right-2 md:right-4 top-2.5">
          <GoTriangleDown />
        </span>
      </div>
    </div>
  );
};

export default SortBy;
