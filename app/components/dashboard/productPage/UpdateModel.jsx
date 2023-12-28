import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const UpdateModel = ({ models }) => {
  const sizesDeras = ["sm", "md", "xl", "2xl", "3xl", "4xl"];
  const sizesCheldren = ["0-6M", "6-12M", "12-18M", "18-24M", "2-3Y", "3-4Y"];

  const [addSize, setAddSize] = useState(false);
  return (
    <div className="m-2 flex gap-2">
      {/* image box  */}
      <div className="flex justify-start gap-2">
        {models?.url.map((item, i) => (
          <div key={i} className="relative">
            <Image
              src={item}
              alt={`image${i}`}
              className="w-[80px] h-[80px]"
              width={80}
              height={80}
            />
            <div className="text-black cursor-pointer w-[16px] h-[16px] rounded-full absolute top-2 right-2">
              <HiOutlineTrash size={15} />
            </div>
          </div>
        ))}
        <div className="bg-gray-300 border-1 border-gray- flex justify-center items-center w-[80px] h-[80px]">
          <button className="text-[14px] ">add Img</button>
        </div>
      </div>
      {/* size box */}
      <div className="">
        <div className="flex gap-2">
          {models?.size.map((item, i) => (
            <div
              key={i}
              className="flex items-center bg-red-100 h-[25px] px-2 py-1 rounded-lg"
            >
              <label htmlFor="size">{item.theSize}:</label>
              <input
                id="size"
                className=" text-black max-w-[30px] mx-1 bg-red-100"
                type="text"
                defaultValue={item.stoke}
              />
            </div>
          ))}
        </div>
        <div className="my-2 bg-blue-100">
          <button
            onClick={() => setAddSize(!addSize)}
            className="bg-green-300 px-1 rounded-md"
          >
            + add
          </button>
          {addSize && (
            <div className="flex gap-1 my-1">
              {sizesDeras.map((item, i) => (
                <span
                  key={i}
                  className="px-1 rounded-md bg-slate-400 text-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
