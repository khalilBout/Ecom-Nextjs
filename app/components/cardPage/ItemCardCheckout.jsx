"use client";
import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
import noImg from "@/public/empty.png";
import { removeItem, increaseCount, decreaseCount } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";

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
      <div className="flex-shrink-0 overflow-hidden rounded-md ">
        <Image
          src={imageModel || noImg}
          width={110}
          height={160}
          alt={item.titleProduct}
          className="object-cover object-center"
        />
      </div>

      {/* titel box  */}
      <div className="mx-2 w-full flex gap-2 ">
        <div className="w-1/2 flex flex-col justify-between ">
          <h2 className="my-2 text-[20px] mdl:text-[26px] font-bold text-gray-900">
            <a>{titleProduct}</a>
          </h2>
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

            {/* quantity  */}
            <div className="w-[90px] flex flex-row ">
              <button
                onClick={() =>
                  dispatch(decreaseCount({ idProduct, idModel, sizeSelect }))
                }
                data-action="decrement"
                className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-bold text-black">-</span>
              </button>

              <input
                // type="number"
                className=" focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  mdl:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                name="custom-input-number"
                value={Qt}
                readOnly
              ></input>

              <button
                onClick={() =>
                  dispatch(increaseCount({ idProduct, idModel, sizeSelect }))
                }
                data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-bold text-black">+</span>
              </button>
            </div>
          </div>
        </div>

        {/* color and size box  */}
        <div className="w-1/2 flex flex-col justify-end ">
          {/* Color  */}
          <div className="flex items-center  ">
            <h2 className="text-[16px] font-bold mdl:text-[20] ">Color: </h2>
            <div
              className="w-[20px] h-[20px] mdl:w-[35px] mdl:h-[35px] border-2 rounded-full mx-2 "
              style={{ backgroundColor: Color }}
            ></div>
          </div>
          {/* size */}
          <div className="">
            <h2 className="">
              size:
              <span className="px-2 mx-1 rounded-md bg-slate-200">
                {sizeSelect}
              </span>
            </h2>
            {/* <h2 className="">Qt:{item.Qt}</h2> */}
          </div>
          <div className="flex">
            <p className="text-[16px] font-bold mdl:text-[20] mr-2">Total:</p>
            <p>
              {finalPrice && finalPrice > 0 ? (
                <> {finalPrice * Qt}</>
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
        <ImCross className="text-primeColor  hover:text-red-500 duration-300 cursor-pointer" />
      </button>
    </div>
  );
};

export default ItemCardCheckout;
{
  /* <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={deleteItem}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <Image className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={drecreaseQuantity}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={increaseQuantity}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item.quantity * item.price}</p>
        </div>
      </div>
    </div> */
}
