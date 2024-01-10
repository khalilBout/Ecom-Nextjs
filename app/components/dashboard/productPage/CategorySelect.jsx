"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategorySelect = () => {
  const categoryList = ["man", "woman", "children"];
  const [category, setCategory] = useState("");

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    replace(`${pathname}?${params}`);
  }, [category]);

  const handelChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <select
      className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
      name="category"
      defaultValue="all"
      onChange={handelChange}
    >
      <option key="all" value="">
        All Category
      </option>
      {categoryList?.map((cty) => (
        <option key={cty} value={cty}>
          {cty}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
