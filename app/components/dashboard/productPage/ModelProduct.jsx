"use client";
import React, { useState } from "react";

// components
import SizeProduct from "@/app/components/dashboard/productPage/SizeProduct";
import ColorProduct from "@/app/components/dashboard/productPage/ColorProduct";
import AddImageProduct from "@/app/components/dashboard/productPage/AddImageProduct";
import { HiOutlineTrash } from "react-icons/hi";

const ModelProduct = ({ caty, setListModels }) => {
  // data of product
  const [size, setSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [url, setUrl] = useState([]);
  // const [publicId, setPublicId] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const deleteSize = (index) => {
    setSize((prev) => {
      const updateList = [...prev];
      updateList.splice(index, 1);
      return updateList;
    });
  };

  const dataModels = {
    size,
    selectedColor,
    url,
  };

  const addModel = () => {
    if (size.length === 0 || selectedColor.length === 0) {
      return alert("add size and color of product ");
    }
    setListModels((prev) => [...prev, dataModels]);
    setSize([]);
    setSelectedColor([]);
    setUrl([]);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Models Of Product:
      </h2>
      <div className="w-full flex flex-col mdl:flex-row ">
        {/* color and size  */}
        <div className="p-1 grow">
          {/* colors  */}
          <div className=" p-2 bg-gray-100 rounded-lg ">
            <ColorProduct
              setIsChanged={setIsChanged}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
          {/* size  */}
          <div className="my-1 p-1 bg-gray-100 rounded-lg ">
            <SizeProduct
              size={size}
              setSize={setSize}
              caty={caty}
              setIsChanged={setIsChanged}
            />
            {/* list of sizes   */}
            {size.length > 0 && (
              <>
                <hr border="true" className="bg-red-800" />
                <div className="flex gap-2 m-2">
                  {size.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-red-00 h-[25px] px-2 py-1 rounded-lg cursor-pointer"
                    >
                      <p className="text-[16px] font-medium">{item.theSize}:</p>
                      <h3 className="text-[14px] text-black max-w-[30px] mx-1 ">
                        {item.stoke}
                      </h3>
                      <div
                        className="p-1 hover:bg-red-400 rounded-full cursor-pointer bg-red-200"
                        onClick={() => deleteSize(item._id)}
                      >
                        <HiOutlineTrash size={18} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        {/* images and btn add models  */}
        <div className="flex flex-col justify-between ">
          {/* images  */}
          <AddImageProduct url={url} setUrl={setUrl} />

          {/* btn add Model  */}
          <div className="p-1">
            <button
              className="w-full hover:bg-lightText text-lightText hover:text-primeColor  bg-primeColor text- text-[14px]  rounded-lg px-2 py-2"
              onClick={() => {
                addModel();
              }}
            >
              Add Model
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelProduct;
