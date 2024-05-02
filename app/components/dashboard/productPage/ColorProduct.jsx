"use client";
import React, { useState } from "react";
import ColorPicker from "react-pick-color";
import { GrAdd } from "react-icons/gr";
// import { GrAdd } from "react-icons/gr";
// import { GrUpdate } from "react-icons/gr";

import { MdOutlineDeleteOutline } from "react-icons/md";

const ColorProduct = ({ selectedColor, setSelectedColor, setIsChanged }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState();

  return (
    <div className="">
      {/* colors data  */}
      <div className=" flex justify-start items-center flex-wrap">
        {/* btn  */}
        <div className="flex gap-2 h-[35px]">
          <button
            className={`h-[30px] w-[100px] block font-medium text-[17px] rounded-lg px-2 ${
              open
                ? "bg-lightText text-primeColor"
                : "bg-primeColor text-lightText"
            }`}
            onClick={() => setOpen(!open)}
          >
            Color
          </button>
        </div>
        {/* display color  */}
        <div className="h-[35px]">
          {selectedColor?.length > 0 && (
            <div className="flex items-center space-x-2 mx-1">
              <span className="border-[1px] rounded-lg p-1 px-3 text-[14px]">
                {color || selectedColor}
              </span>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100%",
                  backgroundColor: selectedColor,
                  display: "inline-block",
                }}
              ></div>

              {/* <button
                className="bg-red-400 hover:bg-red-600 w-[30px] h-[30px] border-[1px] rounded-full p-1 flex justify-center items-center"
                onClick={handleDeleteColor}
              >
                <MdOutlineDeleteOutline className="" size={18} />
              </button> */}
            </div>
          )}
        </div>
      </div>

      {/* add colors  */}
      <div className="flex justify-center items-center">
        {open && (
          <ColorPicker
            color={color}
            onChange={(color) => {
              setSelectedColor(color.hex);
              setColor(color.hex);
              setIsChanged(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ColorProduct;
