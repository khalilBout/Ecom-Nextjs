import React from "react";
import Image from "next/image";
import empty from "@/public/images/empty.png";

// icone
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Link from "next/link";

const Product = ({ product }) => {
  const listOfStoke = product?.listModels.map((item) => {
    const value = item.size.map((x) => x.stoke);
    const total = value.reduce((a, c) => a + c, 0);
    return total;
  });
  const listOfColors = product?.listModels.map((item) => item.selectedColor);
  const globalStoke = listOfStoke.reduce((a, c) => a + c, 0);

  let allImages = [];
  product.listModels?.map((item) => {
    if (item.url.length > 0) {
      item.url.map((x) => allImages.push(x));
      return allImages;
    }
  });

  const handleProductDetails = () => {
    confirm.log("delete item ...");
  };
  const addToCart = () => {
    confirm.log("delete item ...");
  };

  return (
    <Link href={`/shop/${product._id}`} className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          {allImages.length > 0 ? (
            <>
              <Image
                width={100}
                height={100}
                className="w-full h-full"
                src={allImages[0]}
                alt="FirstImage"
              />
            </>
          ) : (
            <>
              <Image
                width={100}
                height={100}
                className="w-full h-full"
                src={empty}
                alt="noImage"
              />
            </>
          )}
        </div>
        <div className=" absolute top-6 left-8">
          {globalStoke === 0 ? (
            <>
              <div className="bg-red-400 w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
                Over
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-md w-[92px] h-[35px] text-primeColor flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
              {product.style}
            </div>
          )}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center  gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <span>
                <GiReturnArrow />
              </span>
              Color:
              {listOfColors?.map((item, index) => (
                <span
                  key={index}
                  style={{ background: item }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
              ))}
            </li>

            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <span>
                <BsSuitHeartFill />
              </span>
              category: {product.category}
            </li>
            <li
              // onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
              View Details
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{product.title}</h2>
          {product.finalPrice ? (
            <div className="flex gap-2">
              <p className="text-[#767676] text-[14px] line-through ">
                ${product.price}
              </p>
              <p className="text-[#767676] text-[14px]">
                ${product.finalPrice}
              </p>
            </div>
          ) : (
            <p className="text-[#767676] text-[14px]">${product.price}</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#767676] text-[14px]">{product.category}</p>
          {globalStoke < 5 && globalStoke > 0 ? (
            <>
              <p className="text-[14px] bg-red-500 rounded-lg px-2">
                limited Qty
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Product;
