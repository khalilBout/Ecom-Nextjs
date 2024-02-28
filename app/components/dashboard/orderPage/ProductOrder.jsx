"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";

const ProductOrder = ({ item, deleteModel, handelUpdateModel }) => {
  const id = item.productID;
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async (id) => {
      const res = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setProduct(data);
    };
    getProduct(id);
  }, [id]);

  // Product logic

  // Find reale stoke of selected size of model
  const IdModel = item?.idModel;
  const sizeModel = item?.sizeSelect;
  const modelFromDB = product?.listModels.find((x) => x._id === IdModel);
  const sizeSelected = modelFromDB?.size.find((x) => x.theSize === sizeModel);

  // Update Logic
  const [openUpdate, setOpenUpdate] = useState(false);
  const [newSizeSelect, setNewSizeSelect] = useState(null);
  const [newQt, setNewQt] = useState(1);

  // find model stoke not empty
  const colorData = product?.listModels.filter((item) => {
    if (item.size.reduce((total, item) => item.stoke + total, 0) > 0) {
      return item;
    }
  });
  const [selectModel, setSelectModel] = useState(null);
  const listOfSizeObject = selectModel?.size;

  const decrement = () => {
    newQt > 1 ? setNewQt(newQt - 1) : newQt(1);
  };
  const increment = () => {
    if (newSizeSelect === null) {
      return alert("ou mast chose a size");
    }
    if (newQt === newSizeSelect?.stoke) {
      return alert(`only ${newSizeSelect?.stoke} in stoke`);
    }
    setNewQt(newQt + 1);
  };

  const DataUpdated = {
    ...item,
    modelId: selectModel?._id,
    Color: selectModel?.selectedColor,
    sizeSelect: newSizeSelect?.theSize,
    quantity: newQt,
  };
  const handelUpdate = () => {
    if (selectModel === null || newSizeSelect === null) {
      toast.error("must selected color and size !.");
    } else {
      handelUpdateModel(DataUpdated);
    }
  };
  return (
    <div className="relative flex rounded-md m-1 p-1 bg-slate-100">
      {/* Btn Action */}
      <div className="absolute top-4 right-4 flex gap-2 ">
        {/* open Update Btn  */}
        {openUpdate ? (
          <button
            type="button"
            className="px-1 text-[14px] rounded-md text-primeColor bg-green-200 hover:bg-green-400 duration-200 cursor-pointer"
            onClick={() => {
              handelUpdate();
              setOpenUpdate(!openUpdate);
            }}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="px-1 text-[14px] rounded-md text-primeColor bg-green-200 hover:bg-green-400 duration-200 cursor-pointer"
            onClick={() => setOpenUpdate(true)}
          >
            <BiEdit
              size={22}
              className="text-primeColor  hover:text-green-500 duration-200 cursor-pointer"
            ></BiEdit>
          </button>
        )}

        {/* Update Btn  */}

        {/* delete Btn  */}
        <button
          type="button"
          className=" font-medium px-1 rounded-md cursor-pointer"
          onClick={() => deleteModel(item.idModel)}
        >
          <HiOutlineTrash
            size={22}
            className="text-primeColor  hover:text-red-500 duration-200 cursor-pointer"
          />
        </button>
      </div>
      {/* image box  */}
      <div className="border bg-gray-300 relative w-[110px] h-[120px] rounded-md ">
        <Image
          src={item?.imageModel}
          fill
          objectFit="cover"
          objectPosition="center"
          alt={item.productTitle}
        />
      </div>
      {/* body of product  */}
      <div className="w-full px-2">
        <>
          {openUpdate ? (
            <>
              <div className="">
                {/* Select color */}
                <div className="py-1">
                  {colorData?.map((c, index) => (
                    <button
                      key={index}
                      className={`relative w-[20px] h-[20px] border border-black m-1
          ${
            selectModel?.selectedColor === c.selectedColor
              ? " border-red-900 border-[2px] shadow-md"
              : "border-black "
          }
                `}
                      style={{
                        borderRadius: "100%",
                        backgroundColor: c.selectedColor,
                        display: "inline-block",
                      }}
                      onClick={() => setSelectModel(c)}
                    ></button>
                  ))}
                </div>

                {/* Select Size  */}
                <div className="py-1">
                  {selectModel === null ? (
                    <p className="text-[13px] text-red-300">select Color...</p>
                  ) : (
                    <>
                      <div className="flex gap-1">
                        {listOfSizeObject?.map((size, index) => (
                          <div key={index}>
                            <button
                              key={index}
                              className={`text-[12px] p-1 border-[1px] rounded-md cursor-pointer inline-block text-center
                  ${
                    newSizeSelect?.theSize === size.theSize
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }
                      `}
                              onClick={() => {
                                setNewSizeSelect(size);
                                // getRealeStoke();
                              }}
                            >
                              <span className="text-blue-700">
                                {size.theSize.toUpperCase()}
                              </span>
                              <span className="text-orange-600 px-1 ">|</span>
                              <span className="text-blue-700">
                                {size?.stoke}
                              </span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* add quantity  */}
                <div className="">
                  {selectModel && newSizeSelect && (
                    <div className="w-full flex justify-between items-center ">
                      <div className=" mt-1 w-[80px]  bg-slate-200 rounded-md border-2 flex justify-between items-center ">
                        <button
                          disabled={newQt === 1}
                          className="bg-slate-300 cursor- px-2 rounded-md"
                          onClick={() => decrement()}
                        >
                          -
                        </button>
                        {newQt > newSizeSelect?.stoke ? (
                          <span>{newSizeSelect?.stoke}</span>
                        ) : (
                          <span>{newQt}</span>
                        )}
                        <button
                          className="bg-slate-300 cursor-pointer px-2 rounded-md"
                          onClick={() => increment()}
                        >
                          +
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="">
                          <span className="py-2">- {product.priceDrop} %</span>
                          <span className="py-2"> | Prc:</span>
                          <span className="text-red-400 py-1">
                            {product.finalPrice} $
                          </span>
                        </div>
                        <hr />
                        <h2 className="text-[14px]">
                          TTC:
                          <span className="text-red-400 px-1">
                            {product.finalPrice * newQt} $
                          </span>
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {sizeSelected === undefined ? (
                <>
                  <div className="mt-8">
                    <h2 className="text-xl text-bodyFont text-red-400">
                      No More this Product in Stoke.
                    </h2>
                    <div className="">
                      <p>{item.productTitle.substring(0, 30)}</p>
                      <div className="flex items-center">
                        <div
                          className="w-[18px] h-[18px] mdl:w-[25px] mdl:h-[25px] border-1 rounded-full mx-2 "
                          style={{ backgroundColor: item.Color }}
                        ></div>
                        <span className="px-2 mx-1 ">{item.sizeSelect} |</span>
                        <span className="px-2 mx-1 ">Qt : {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mx-2 w-full flex justify-between gap-1 h-full">
                  <div className="flex flex-col justify-between">
                    {/* titel box  */}
                    <h2 className=" text-[18px] mdl:text-[20px] font-bold text-gray-700">
                      <p>{item.productTitle.substring(0, 30)}</p>
                    </h2>
                    {/* Color and size  */}
                    <div className="flex items-center">
                      <div
                        className="w-[18px] h-[18px] mdl:w-[25px] mdl:h-[25px] border-1 rounded-full mx-2 "
                        style={{ backgroundColor: item.Color }}
                      ></div>
                      <span className="px-2 mx-1 rounded-md bg-slate-200">
                        {item.sizeSelect}
                      </span>
                    </div>

                    {/* quantity  */}
                    <div className="">
                      <p className="text-l font-semibold text-gray-600">
                        Qt:{" "}
                        <span className="text-red-400 ">{item.quantity}</span>
                      </p>
                      {sizeSelected?.stoke < item.quantity ? (
                        <p className="text-red-400 text-[14px]">
                          stoke not Enif
                        </p>
                      ) : (
                        <p className="text-gray-600 text-[14px] bg-red-100 rounded-sm px-2">
                          | Reale Stoke:{" "}
                          <span className="text-red-400">
                            {sizeSelected?.stoke}
                          </span>{" "}
                          Pce
                        </p>
                      )}
                    </div>
                  </div>

                  <div className=" flex flex-col justify-end items-end ">
                    {/* price  */}
                    <div className="">
                      <div className="flex my-1">
                        {item.finalPrice && item.finalPrice > 0 ? (
                          <div className="flex items-center">
                            <span className="text-red-400 line-through">
                              {item.price} $
                            </span>
                            <span className="text-xl px-2">|</span>
                            <span className="text-red-400">
                              {item.finalPrice} $
                            </span>
                          </div>
                        ) : (
                          <span className="text-red-400 ">{item.price} $</span>
                        )}
                      </div>
                    </div>
                    <hr className="w-full border-[1px] border-gray-950" />
                    {/* total  */}
                    <div className="flex">
                      <p className="text-[16px] text-gray-500 font-bold mdl:text-[20] mr-2">
                        Total:
                      </p>
                      <p>
                        {item.finalPrice && item.finalPrice > 0 ? (
                          <span className="text-red-700">
                            {" "}
                            {item.finalPrice * item.quantity} $
                          </span>
                        ) : (
                          <span className="text-red-700">
                            {item.price * item.quantity}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default ProductOrder;
