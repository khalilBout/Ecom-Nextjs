"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchComponent = () => {
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

  return (
    <>
      <div className="border border-gray-400 relative w-full lg:w-[500px] h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          placeholder="Search your products here"
        />
        <FaSearch className="w-5 h-5" />
      </div>
    </>
  );
};

export default SearchComponent;
