"use client";
import React, { useState } from "react";
import ColorPicker from "react-pick-color";
import { GrAdd } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ColorProduct = ({ selectedColor, setSelectedColor }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState();

  const handleColorButtonClick = () => {
    setSelectedColor(color);
    setOpen(false);
  };
  const handleDeleteColor = () => {
    setSelectedColor([]);
  };
  return (
    <div className="my-1 ">
      {/* colors data  */}
      <div className=" flex justify-between items-center flex-wrap">
        {/* btn  */}
        <div className="flex gap-2 h-[35px]">
          <button
            className="h-[30px] basis-1/2 block bg-rose-300 rounded-lg px-3 text-[14px] "
            onClick={() => setOpen(!open)}
          >
            Select
          </button>
          <button
            className="h-[30px] basis-1/2 flex  items-center space-x-1 bg-green-400 rounded-lg p-1 px-3 text-[14px]"
            onClick={handleColorButtonClick}
          >
            Add
            <GrAdd className="ml-1" size={16} />
          </button>
        </div>
        {/* display color  */}
        <div className="h-[35px]">
          {selectedColor?.length > 0 && (
            <div className="flex items-center space-x-4 mb-2">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100%",
                  backgroundColor: selectedColor,
                  display: "inline-block",
                }}
              ></div>
              <span className="border-[1px] rounded-lg p-1 px-3 text-[14px]">
                {color}
              </span>
              <button
                className="bg-red-500 border-[1px] rounded-lg p-1 px-3 text-[14px]"
                onClick={handleDeleteColor}
              >
                <MdOutlineDeleteOutline className=" ml-1" size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* add colors  */}
      <div className="flex justify-center items-center my-2">
        {open && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
      </div>
    </div>
  );
};

export default ColorProduct;
