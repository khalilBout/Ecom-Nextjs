"use client";
import Image from "next/image";
// import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import noImg from "@/public/empty.png";
import Link from "next/link";
import { removeItem, increaseCount, decreaseCount } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";

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
    <>
      <div
        key={item.titleProduct}
        className="relative flex rounded-md m-2 p-2 "
      >
        {/* image box  */}
        <div className="border bg-gray-300 relative w-[90px] h-[100px] rounded-md ">
          <Image
            src={imageModel || noImg}
            fill
            objectFit="cover"
            objectPosition="center"
            alt={item.titleProduct}
          />
        </div>

        <div className="mx-2 w-full">
          {/* titel box  */}
          <h2 className="text-[15px] mdl:text-[17px] text-gray-700">
            <a>{titleProduct.substring(0, 15)}</a>
          </h2>
          <div className="flex gap-2 mt-2">
            <div className="flex flex-col justify-between">
              {/* Color and size  */}
              <div className="flex items-center">
                <div
                  className="w-[20px] h-[20px] mx-2 border-1 border-white rounded-full"
                  style={{ backgroundColor: Color }}
                ></div>
                <span className="px-2 py-1 text-[14px] rounded-md bg-slate-100">
                  {sizeSelect}
                </span>
              </div>

              {/* quantity  */}
              <div className="py-2">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="w-6 h-6 leading-10 transition hover:opacity-75 border flex justify-center items-center"
                    onClick={() =>
                      dispatch(
                        decreaseCount({ idProduct, idModel, sizeSelect })
                      )
                    }
                  >
                    -
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value={Qt}
                    className="h-6 w-10 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="flex justify-center items-center w-6 h-6 leading-10 text-text transition hover:opacity-75 border"
                    onClick={() =>
                      dispatch(
                        increaseCount({ idProduct, idModel, sizeSelect })
                      )
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
                  {/* <p
                className={`mr-3 font-bold text-black text-[18px] mdl:text-[22px] ${
                  finalPrice > 0 ? "line-through" : ""
                }`}
              >
                ${price}
              </p> */}
                  {item.finalPrice && (
                    <p className="text-md font-bold text-red-600 text-[18px] mdl:text-[22px]">
                      ${finalPrice}
                    </p>
                  )}
                </div>
              </div>
              <hr className="w-full border-[1px]" />
              {/* total  */}
              <div className="flex text-[18px]">
                {/* <p className="text-[16px] font-bold mdl:text-[20] mr-2">Total:</p> */}
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
        </div>

        <button
          type="button"
          className="absolute top-2 right-2 font-medium px-1 rounded-md cursor-pointer"
          onClick={() =>
            dispatch(removeItem({ idProduct, idModel, sizeSelect }))
          }
        >
          <HiOutlineTrash
            size={22}
            className="text-primeColor  hover:text-red-500 duration-300 cursor-pointer"
          />
        </button>
      </div>
      <hr className="w-full border-[1px] my-2" />
    </>
  );
};

export default ItemCard;
{
  /* <div className="flex border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link href={`/shop/${item.idProduct}`}>
          <img
            className="max-w-[80px]"
            src={imageModel || noImg}
            alt={titleProduct}
          />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <h2 className=" px-2 py-1 text-sm mb-1 uppercase font-medium max-w-[240px] text-gray-200 hover:bg-gray-700 rounded-md">
              {titleProduct}
            </h2>
            <div className="text-xl cursor-pointer">
              <HiOutlineTrash
                className="text-gray-500 hover:text-red-500 transition"
                onClick={() =>
                  dispatch(removeItem({ idProduct, idModel, sizeSelect }))
                }
              />
            </div>
          </div>


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
            <div>
              <label htmlFor="Quantity" className="sr-only">
                Quantity
              </label>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-6 h-6 leading-10 flex justify-center items-center transition hover:opacity-75 border "
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
                  className="h-6 w-10 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                  type="button"
                  className="w-6 h-6 leading-10 flex justify-center items-center transition hover:opacity-75 border"
                  onClick={() =>
                    dispatch(increaseCount({ idProduct, idModel, sizeSelect }))
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-xl flex-1 flex items-center justify-around text-lightText">
              {finalPrice}$
            </div>
            <div className=" text-xl font-medium flex-1 flex justify-end items-center text-red-400">
              {finalPrice * Qt}$
            </div>
          </div>
        </div>
      </div>
    </div> */
}
