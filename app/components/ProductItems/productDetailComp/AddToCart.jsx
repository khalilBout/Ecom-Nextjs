"use client";
import Link from "next/link";
import React from "react";
import { useState, useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GlobalContext } from "@/services/context/GlobalContext";

const AddToCart = ({ product }) => {
  const { addItemToCart, showCartModal, setShowCartModal } =
    useContext(GlobalContext);

  const idProduct = product._id;
  const [Qt, setQt] = useState(1);
  const [dataSizesSelect, setDataSizesSelect] = useState({
    theSize: "",
    stoke: 0,
  });
  const sizeSelect = dataSizesSelect?.theSize;
  const sizeSelectStoke = dataSizesSelect?.stoke;
  const [Color, setColor] = useState("");
  const listOfColors = product?.listModels.map((item) => item.selectedColor);
  const listOfModels = product?.listModels.map((item) => item);
  const currentModel = listOfModels?.find((x) => x.selectedColor === Color);
  const idModel = currentModel?._id;
  const titleProduct = product?.title;
  const price = product?.price;
  const imageModel = currentModel?.url[0];
  const listSizeCurrent = currentModel?.size;
  const finalPrice = product?.finalPrice;
  // handel qt
  const decrement = (prev) => {
    Qt > 1 ? setQt(Qt - 1) : setQt(1);
  };
  const increment = (prev) => {
    if (sizeSelect === "") {
      return alert("ou mast chose a size");
    }
    if (Qt === sizeSelectStoke) {
      return alert(`only ${sizeSelectStoke} in stoke`);
    }
    setQt(Qt + 1);
  };
  const itemToCart = {
    titleProduct,
    idProduct,
    price,
    finalPrice,
    idModel,
    Qt,
    Color,
    sizeSelect,
    sizeSelectStoke,
    imageModel,
  };
  const handleCart = () => {
    if (Color === "" || sizeSelect === "") {
      return alert("plase select color and size of product ");
    } else {
      console.log("send item To Cart:", itemToCart);
      addItemToCart({ itemToCart });
      setShowCartModal(!showCartModal);
    }
  };

  return (
    <div className="">
      {/* Select color */}
      <h3 className="font-medium mt-6 text-[14px] sml:text-[16px]">
        Colour Available
      </h3>
      {listOfColors.map((c, index) => (
        <Link
          href={{
            pathname: `/shop/${product._id}`,
            query: {
              color: `${c}`,
              size: `${sizeSelect}`,
            },
          }}
          key={index}
          className={`relative w-[18px] h-[18px] sml:w-[30px] sml:h-[30px] border-[1px] border-black m-1
          ${Color === c ? " border-red-900 border-[3px]" : "border-black "}
          `}
          style={{
            borderRadius: "100%",
            backgroundColor: c,
            display: "inline-block",
          }}
          onClick={() => setColor(c)}
          scroll={false}
          //  putColor(c)
        ></Link>
      ))}
      <h3 className="font-medium mt-2 text-[14px] sml:text-[16px]">
        Size Available
      </h3>
      {Color === "" ? (
        <p className="text-[12px] sml:text-[14px] text-red-300">
          select Color...
        </p>
      ) : (
        <>
          <div className="flex space-x-5 mb-2">
            {listSizeCurrent?.map((size, index) => (
              // <Link href={{ pathname: "/", query: { color: "ok" } }}>
              <Link
                key={index}
                href={{
                  pathname: `/shop/${product._id}`,
                  query: {
                    color: `${Color}`,
                    size: `${sizeSelect}`,
                  },
                }}
                className={`text-[12px] py-1 px-2 border-[1px] rounded-lg cursor-pointer inline-block text-center
            ${
              sizeSelect === size.theSize
                ? "bg-black text-white"
                : "bg-white text-black"
            }
                `}
                onClick={() => setDataSizesSelect(size)}
                scroll={false}
              >
                {size.theSize}
              </Link>

              // </Link>
            ))}
          </div>
          <div>
            {dataSizesSelect?.theSize !== "" && dataSizesSelect?.stoke < 5 ? (
              <>
                <p className="text-[12px] text-red-700 sml:text-[14px]">
                  only {dataSizesSelect?.stoke} in stoke
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
      {/* add quantity  */}
      <h3 className="font-medium mt-2 text-[14px] sml:text-[16px] mb-2">
        Quantity:
      </h3>
      <div className="mt-2 w-[100px]  bg-slate-200 rounded-lg border-2 flex justify-between items-center ">
        <button
          disabled={Qt === 1}
          className="bg-slate-300 cursor- px-3 rounded-lg"
          onClick={() => decrement()}
        >
          -
        </button>
        <span>{Qt}</span>
        <button
          className="bg-slate-300 cursor-pointer px-3 rounded-lg"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      {/* add to cart  */}
      <div className="flex items-center mt-7 space-x-10">
        {/* <AddCart productId={id}/> */}
        <div
          onClick={handleCart}
          className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont flex justify-center items-center cursor-pointer"
        >
          <span className="mx-4">
            <CiShoppingCart size={24} />
          </span>
          <span className="text-wm">Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
