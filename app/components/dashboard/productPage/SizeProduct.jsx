"use client";
import React, { useState } from "react";

const SizeProduct = ({ size, setSize, caty }) => {
  const sizesDeras = ["sm", "md", "xl", "2xl", "3xl", "4xl"];
  const sizesCheldren = ["0-6M", "6-12M", "12-18M", "18-24M", "2-3Y", "3-4Y"];

  const [theSize, setTheSize] = useState("");
  const [stoke, setStoke] = useState("");

  const handelStoke = (e) => {
    setStoke(e.target.value);
  };

  const handleSize = (newSize) => {
    const listSizes = size?.map((x) => x.theSize);
    if (listSizes.includes(newSize)) {
      return alert("size is exist...");
    }
    setTheSize(newSize);
  };
  const dataSize = {
    theSize,
    stoke,
  };
  const handelAddSize = (e) => {
    if (theSize === "" || stoke === "") {
      return alert("add size and num of pice ! ");
    }
    setSize((prev) => [...prev, dataSize]);
    setTheSize("");
    setStoke("");
  };
  return (
    <div className="m-2">
      {caty === "children" ? (
        <div className="my-0">
          {sizesCheldren.map((item) => (
            <button
              key={item}
              className={`border-[0.5px] rounded-lg text-center text-[10px] py-[1px] cursor-pointer px-2 m-2 
              ${theSize === item ? "bg-gray-500 text-white" : ""}`}
              onClick={() => handleSize(item)}
            >
              {item}
            </button>
          ))}
        </div>
      ) : (
        <div className="my-0 ">
          {sizesDeras.map((item) => (
            <button
              key={item}
              className={`border-[0.5px] rounded-lg text-center text-[12px] px-3 py-1 cursor-pointer mr-2 
                ${theSize === item ? "bg-gray-500 text-white" : ""}`}
              onClick={() => handleSize(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between my-1 ">
        <h2 className="mr-8 text-[18px]">
          Size Selected:
          {theSize && (
            <span className="text-[14px] text-red-400 border-[0.5px] rounded-lg text-center bg-slate-200 px-3 py-1">
              {theSize}
            </span>
          )}
        </h2>
        <input
          className=" h-[30px] w-[100px] border-[0.5px] rounded-lg focus:border-red-300 px-2 focus:border-1 outline-none "
          placeholder="Stoke:"
          name="stoke"
          value={stoke}
          onChange={handelStoke}
        />
        <button
          onClick={handelAddSize}
          className="px-2 py-1 text-[14px] bg-red-300 h-[30px] rounded-lg"
        >
          Add Size
        </button>
      </div>
    </div>
  );
};

export default SizeProduct;
