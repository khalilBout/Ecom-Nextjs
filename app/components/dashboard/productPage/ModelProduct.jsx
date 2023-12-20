"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

// components
import SizeProduct from "@/app/components/dashboard/productPage/SizeProduct";
import ColorProduct from "@/app/components/dashboard/productPage/ColorProduct";

const ModelProduct = ({ caty, listModels, setListModels }) => {
  // data of product
  const [size, setSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [url, setUrl] = useState([]);
  const [publicId, setPublicId] = useState([]);

  const deleteSize = (index) => {
    console.log("index1", index);
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
    setPublicId([]);
  };

  const handelUpload = (result) => {
    const info = result.info;
    const publicId = result.public_id;
    if ("secure_url" in info && "public_id" in info) {
      // data of image
      const urlImage = info.secure_url;
      const public_id = info.public_id;
      setUrl((prev) => [...prev, urlImage]);
      setPublicId((prev) => [...prev, public_id]);
    }
  };
  return (
    <div className="py-2">
      {/* <form> */}
      {/* size  */}
      <div className="my-1 p-2 bg-gray-100 rounded-lg ">
        <SizeProduct size={size} setSize={setSize} caty={caty} />
        {/* list of sizes   */}
        {size.length > 0 && (
          <>
            <hr />
            <div className="flex gap-2 m-2">
              {size.map((item, index) => (
                <div
                  className=" bg-blue-300 rounded-lg p-1 relative"
                  key={index}
                >
                  <h2 className="text-[16px]">
                    size:
                    <span className="text-[14px] text-red-400  rounded-lg text-center px-2 py-0">
                      {item.theSize}
                    </span>
                  </h2>
                  <h2 className="text-[16px]">
                    stoke:
                    <span className="text-[14px] text-red-400 rounded-lg text-center px-2 py-0">
                      {item.stoke}
                    </span>
                  </h2>
                  <h3
                    className="text-center w-[14px] h-[14px] cursor-pointer rounded-full bg-red-600 text-[10px] absolute top-1 right-1"
                    onClick={() => deleteSize(index)}
                  >
                    X
                  </h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {/* colors  */}
      <div className="my-1 p-2 bg-gray-100 rounded-lg">
        <ColorProduct
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      {/* images  */}
      <div>
        <CldUploadButton
          uploadPreset="mugwi27x"
          className=" py-2 px-4 bg-red-300 rounded-xl flex justify-center items-center cursor-pointer"
          onUpload={handelUpload}
        >
          Add Image
        </CldUploadButton>
        {url.length > 0 && (
          <>
            <hr />
            <div className="flex gap-2 m-2">
              {url.map((item, index) => (
                <div
                  className="bg-green-300 flex justify-center items-center rounded-lg"
                  key={index}
                >
                  <Image width={100} height={160} src={item} alt={item} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="w-full flex justify-end">
        <button
          className=" text-[16px] bg-rose-400 rounded-lg px-4 py-2"
          onClick={() => {
            addModel();
          }}
        >
          Add Model
        </button>
      </div>
    </div>
  );
};

export default ModelProduct;
