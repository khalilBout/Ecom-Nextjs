"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const StateSelect = () => {
  const stateList = ["processing", "completed"];
  const [state, setState] = useState("");

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("state", state);
    replace(`${pathname}?${params}`);
  }, [state]);

  const handelChange = (e) => {
    setState(e.target.value);
  };

  return (
    <select
      className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
      name="order"
      defaultValue=""
      onChange={handelChange}
    >
      <option key="all" value="">
        All Order
      </option>
      {stateList?.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateSelect;
