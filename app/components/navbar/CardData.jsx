"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import ItemCard from "@/app/components/cardPage/ItemCard";
import Image from "next/image";
import { emptyCart } from "@/public/images/index";

const CardData = () => {
  const [showCard, setShowCard] = useState(false);
  const cart = useSelector((state) => state.Cart.cartProducts);
  return (
    <>
      <div>
        <div className="relative">
          <FaShoppingCart onClick={() => setShowCard(!showCard)} />
          <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
            {cart.length}
          </span>
          {/* card box */}
          {showCard && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-8 right-0 z-50 bg-primeColor w-[320px] text-[#767676] h-auto px-4 pb-2"
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((item, index) => (
                    <ItemCard key={index} item={item} />
                  ))}
                  <div className=" my-2 w-full h-[35px]">
                    <Link
                      href="/checkout"
                      className="w-full h-full bg-green-200 text-lightText hover:bg-lightText hover:text-primeColor cursor-pointer flex justify-center items-center"
                      onClick={() => setShowCard(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-4 flex flex-col items-center justify-center ">
                    <Image
                      className="w-40 rounded-lg p-4 mx-auto"
                      src={emptyCart}
                      alt="emptyCart"
                    />
                    <Link href="/shop">
                      <button className="border bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                        Go Shopping
                      </button>
                    </Link>
                  </div>
                  {/* <EmptyCard /> */}
                </>
              )}
            </motion.ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CardData;
