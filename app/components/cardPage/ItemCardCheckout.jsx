"use client";
import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
import noImg from "@/public/empty.png";
import { removeItem, increaseCount, decreaseCount } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";

const ItemCardCheckout = ({ item }) => {
  const dispatch = useDispatch();
  const {
    idProduct,
    idModel,
    titleProduct,
    imageModel,
    Qt,
    finalPrice,
    sizeSelect,
    Color,
    price,
    sizeSelectStoke,
  } = item;

  return (
    <div
      key={item.titleProduct}
      className="relative flex rounded-md m-2 p-2  shadow-testShadow"
    >
      {/* image box  */}
      <div className="border bg-gray-300 relative w-[110px] h-[120px] rounded-md ">
        <Image
          src={imageModel || noImg}
          fill
          objectFit="cover"
          objectPosition="center"
          alt={item.titleProduct}
        />
      </div>

      <div className="mx-2 w-full flex gap-2">
        <div className="w-1/2 flex flex-col justify-between">
          {/* titel box  */}
          <h2 className="my-2 text-[18px] mdl:text-[20px] font-bold text-gray-700">
            <a>{titleProduct.substring(0, 30)}</a>
          </h2>
          {/* Color and size  */}
          <div className="flex items-center">
            <div
              className="w-[18px] h-[18px] mdl:w-[25px] mdl:h-[25px] border-1 rounded-full mx-2 "
              style={{ backgroundColor: Color }}
            ></div>
            <span className="px-2 mx-1 rounded-md bg-slate-200">
              {sizeSelect}
            </span>
          </div>

          {/* quantity  */}
          <div className="py-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-8 h-8 leading-10 transition hover:opacity-75 border flex justify-center items-center"
                onClick={() =>
                  dispatch(decreaseCount({ idProduct, idModel, sizeSelect }))
                }
              >
                -
              </button>

              <input
                type="number"
                id="Quantity"
                value={Qt}
                className="h-8 w-12 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                className="flex justify-center items-center w-8 h-8 leading-10 text-text transition hover:opacity-75 border"
                onClick={() =>
                  dispatch(increaseCount({ idProduct, idModel, sizeSelect }))
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-end items-end  ">
          {/* price  */}
          <div className="">
            <div className="flex my-1">
              <p
                className={`mr-3 font-bold text-black text-[18px] mdl:text-[22px] ${
                  finalPrice > 0 ? "line-through" : ""
                }`}
              >
                ${price}
              </p>
              {item.finalPrice && (
                <p className="text-md font-bold text-red-600 text-[18px] mdl:text-[22px]">
                  ${finalPrice}
                </p>
              )}
            </div>
          </div>
          <hr className="w-full border-[1px]" />
          {/* total  */}
          <div className="flex">
            <p className="text-[16px] font-bold mdl:text-[20] mr-2">Total:</p>
            <p>
              {finalPrice && finalPrice > 0 ? (
                <> {finalPrice * Qt} $</>
              ) : (
                <>{price * Qt}</>
              )}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute top-4 right-4 font-medium px-1 rounded-md cursor-pointer"
        onClick={() => dispatch(removeItem({ idProduct, idModel, sizeSelect }))}
      >
        <HiOutlineTrash
          size={22}
          className="text-primeColor  hover:text-red-500 duration-300 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default ItemCardCheckout;
