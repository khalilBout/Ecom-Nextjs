"use client";
import React, { useState } from "react";

const SizeProduct = ({ size, setSize, caty, setIsChanged }) => {
  const sizesDeras = ["sm", "md", "xl", "2xl", "3xl", "4xl"];
  const sizesCheldren = ["0-6m", "6-12m", "12-18m", "18-24m", "2-3y", "3-4y"];

  const [theSize, setTheSize] = useState("");
  const [stoke, setStoke] = useState("");

  const handelStoke = (e) => {
    setStoke(e.target.value);
    setIsChanged(true);
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
    setIsChanged(true);
  };
  return (
    <div className="m-2 inline-block ">
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
      <div className="flex items-center justify-start gap-2 my-1">
        <input
          className=" h-[30px] w-[80px] border-[0.5px] rounded-lg focus:border-red-300 px-2 focus:border-1 outline-none "
          placeholder="Pice"
          name="stoke"
          value={stoke}
          onChange={handelStoke}
        />
        <button
          onClick={handelAddSize}
          className="px-2 py-1 text-[14px] bg-red-200 h-[30px] rounded-lg hover:bg-red-400"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default SizeProduct;
