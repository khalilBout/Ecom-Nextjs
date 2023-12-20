"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { GlobalContext } from "@/services/context/GlobalContext";

import { ImCross } from "react-icons/im";
import noImg from "@/public/empty.png";

const ItemCard = ({ item }) => {
  const {
    isAuthUser,
    setIsAuthUser,
    cart,
    incQttOfProduct,
    decQttOfProduct,
    deleteItemFromCart,
    clearCart,
  } = useContext(GlobalContext);

  return (
    <div
      key={item.titleProduct}
      className="flex rounded-md mx-4 my-2 p-2 relative shadow-testShadow gap-2"
    >
      <div className="flex-shrink-0 overflow-hidden rounded-md ">
        <Image
          src={item.imageModel || noImg}
          width={90}
          height={110}
          alt={item.titleProduct}
          className="object-cover object-center"
        />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-col">
          <div className="font-bold flex justify-between text-[16px] mdl:text-[20px] text-gray-900">
            <h2 className="">
              <a>{item.titleProduct}</a>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {item.finalPrice && item.finalPrice > 0 ? (
              <span className="text-md font-light text-red-600 text-[15px] mdl:text-[18px]">
                ${item.finalPrice}
              </span>
            ) : (
              <span className="font-bold text-md text-red-600 text-[15px] mdl:text-[18px]">
                ${item.price}
              </span>
            )}

            <span className="text-primeColor text-[13px] mdl:text-[15px]">
              X
            </span>
            <span>{item.Qt}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex justify-start items-center flex-shrink-0">
            <h2 className="font-bold">Color: </h2>
            <span
              className="w-[16px] h-[16px] rounded-full ml-2 "
              style={{ backgroundColor: item.Color }}
            ></span>
          </div>
          <div className="">
            <h2 className="font-bold">
              size:
              <span className="px-2 mx-1 rounded-md bg-actionColor">
                {item.sizeSelect}
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        {/* delete btn */}
        <button
          type="button"
          className="absolute top-2 left-2 font-medium px-1 rounded-md cursor-pointer"
          onClick={() =>
            deleteItemFromCart(item.idProduct, item.Color, item.sizeSelect)
          }
        >
          <ImCross className="text-primeColor hover:text-red-500 duration-300 cursor-pointer" />
        </button>
        {/* quantity  */}
        <div className="mt-4 w-[25px] h-[80px] flex flex-col border-gray-100 border-[1px] rounded-md">
          <button
            onClick={() =>
              decQttOfProduct(
                item.idProduct,
                item.Color,
                item.sizeSelect,
                item.sizeSelectStoke
              )
            }
            data-action="decrement"
            className="w-full bg-actionColor text-gray-600 hover:text-gray-700 hover:bg-gray-400 cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-bold text-black">-</span>
          </button>

          <input
            // type="number"
            className=" focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  mdl:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
            name="custom-input-number"
            value={item.Qt}
            readOnly
          ></input>

          <button
            onClick={() =>
              incQttOfProduct(
                item.idProduct,
                item.Color,
                item.sizeSelect,
                item.sizeSelectStoke
              )
            }
            data-action="increment"
            className="w-full bg-actionColor text-gray-600 hover:text-gray-700 hover:bg-gray-400 cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-bold text-black">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
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
