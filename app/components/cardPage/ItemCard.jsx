"use client";
import Image from "next/image";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import noImg from "@/public/empty.png";
import Link from "next/link";
import { removeItem, increaseCount, decreaseCount } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ item }) => {
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
    sizeSelectStoke,
  } = item;

  return (
    <div className="flex border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link href={`/shop/${item.idProduct}`}>
          <img
            className="max-w-[80px]"
            src={imageModel || noImg}
            alt={titleProduct}
          />
        </Link>

        <div className="w-full flex flex-col">
          {/* title & remove Icon */}
          <div className="flex justify-between">
            {/* title  */}
            <h2 className=" px-2 py-1 text-sm mb-1 uppercase font-medium max-w-[240px] text-gray-200 hover:bg-gray-700 rounded-md">
              {titleProduct}
            </h2>
            <div className="text-xl cursor-pointer">
              <IoMdClose
                className="text-gray-500 hover:text-red-500 transition"
                onClick={() =>
                  dispatch(removeItem({ idProduct, idModel, sizeSelect }))
                }
              />
            </div>
          </div>

          {/* Color & Size */}

          <div className="flex flex-wrap gap-2 mb-2">
            <div className="flex justify-start items-center flex-shrink-0">
              <span
                className="w-[16px] h-[16px] rounded-full ml-2 "
                style={{ backgroundColor: Color }}
              ></span>
            </div>
            <div className="">
              <span className="px-2 mx-1 rounded-md bg-gray-700">
                {sizeSelect}
              </span>
            </div>
          </div>

          <div className=" flex gap-x-2 h-[30px] text-sm ">
            {/* Qty  */}
            <div className="px-2 flex flex-1 max-w-[100px] items-center h-full border text-lightText font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove
                  className="hover:text-red-500 transition"
                  onClick={() =>
                    dispatch(decreaseCount({ idProduct, idModel, sizeSelect }))
                  }
                />
              </div>
              <div className="h-full flex justify-start items-center px-2 text-lightText">
                {Qt}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer text-lightText">
                <IoMdAdd
                  className="hover:text-red-500 transition"
                  onClick={() =>
                    dispatch(increaseCount({ idProduct, idModel, sizeSelect }))
                  }
                />
              </div>
            </div>
            {/* Price  */}
            <div className="text-xl flex-1 flex items-center justify-around text-lightText">
              {finalPrice}$
            </div>
            {/* Finel Price */}
            <div className=" text-xl font-medium flex-1 flex justify-end items-center text-red-400">
              {finalPrice * Qt}$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
