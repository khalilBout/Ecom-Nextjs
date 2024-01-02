import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SizeProduct from "./SizeProduct";
import UploadImage from "./UploadImage";
import ColorProduct from "./ColorProduct";

const UpdateModel = ({
  models,
  category,
  modelChanged,
  setModelChanged,
  deleteModel,
}) => {
  const [addSize, setAddSize] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  // handel change in the model
  const [size, setSize] = useState(models.size);
  const [selectedColor, setSelectedColor] = useState(models.selectedColor);
  const [url, setUrl] = useState(models.url);
  const [publicId, setPublicId] = useState([]);

  const NewDataModel = {
    _id: models._id,
    size,
    selectedColor,
    url,
  };

  // delete size
  const deleteSize = (id) => {
    const sizeDeleted = size?.find((x) => x._id === id);
    const newListSize = size?.filter((x) => x !== sizeDeleted);
    setSize(newListSize);
    setIsChanged(true);
  };
  // handel Update Size
  const handelUpdateSize = (e) => {
    const newList = [];
    size?.map((x) => {
      if (x._id === e.target.id) {
        const newSize = {
          _id: x._id,
          theSize: x.theSize,
          stoke: e.target.value,
        };
        return newList.push(newSize);
      }
      newList.push(x);
    });
    setSize(newList);
  };
  const UpdateListModel = () => {
    const list = modelChanged.filter((x) => x._id !== NewDataModel._id);
    setModelChanged([...list, NewDataModel]);
    setIsChanged(false);
  };

  return (
    <>
      <div className="m-2 p-2 rounded-md bg-blue-50 flex gap-2 flex-col mdl:flex-row justify-between">
        {/* size and color  and delete btn */}
        <div className="grow">
          {/* size box */}
          <div className="">
            <div className="flex gap-2">
              {size?.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 flex items-center justify-around px-2  rounded-lg cursor-pointer"
                >
                  <label htmlFor={item._id}>{item.theSize}:</label>
                  <input
                    id={item._id}
                    className=" text-black bg-inherit max-w-[30px] inline-block"
                    type="text"
                    name={item.theSize}
                    onChange={handelUpdateSize}
                    defaultValue={item.stoke}
                  />
                  <button
                    className="w-[20px] h-[20px] rounded-full flex justify-center items-center hover:bg-red-300 "
                    onClick={() => deleteSize(item._id)}
                  >
                    <HiOutlineTrash size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="my-2 flex flex-col ">
              <button
                onClick={() => setAddSize(!addSize)}
                className={` px-2 py-1 rounded-md w-[100px] ${
                  addSize
                    ? "bg-lightText text-primeColor"
                    : "bg-primeColor text-lightText"
                }`}
              >
                Add Size
              </button>

              {addSize && (
                <SizeProduct
                  setIsChanged={setIsChanged}
                  setAddSize={setAddSize}
                  size={size}
                  setSize={setSize}
                  caty={category}
                />
              )}
            </div>
          </div>
          {/* Color Box   */}
          <div className="">
            <ColorProduct
              setIsChanged={setIsChanged}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
          {/* update btn  */}
          <div className="w-full mt-2">
            <button
              onClick={() => {
                deleteModel(models._id);
              }}
              className="w-full px-2 py-1 rounded-md bg-red-300 cursor-pointer"
            >
              Delete Model
            </button>
          </div>
        </div>
        {/* image and btn update  */}
        <div className="flex flex-col gap-2">
          {/* image box  */}
          <div className="flex justify-start gap-2">
            <div className="flex">
              {url?.map((item, i) => (
                <div key={i} className="relative w-[90px] h-[110px] rounded-md">
                  <Image
                    src={item}
                    alt={`image${i}`}
                    className="rounded-md"
                    width={90}
                    height={110}
                  />
                  <div className="text-black cursor-pointer w-[16px] h-[16px] rounded-full absolute top-2 right-2">
                    <HiOutlineTrash size={15} />
                  </div>
                </div>
              ))}
            </div>
            {/* add Image  */}

            <div
              onClick={() => setIsChanged(true)}
              className=" flex justify-center items-center w-[75px] h-[110px] rounded-md"
            >
              <UploadImage
                url={url}
                setUrl={setUrl}
                publicId={publicId}
                setPublicId={setPublicId}
              />
            </div>
          </div>
          {/* update btn  */}
          <div className="w-full">
            <button
              onClick={() => {
                UpdateListModel();
              }}
              className={`w-full px-2 py-1 rounded-md  cursor-pointer ${
                isChanged ? "bg-green-400" : "bg-green-200"
              } `}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModel;
