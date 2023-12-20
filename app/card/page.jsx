"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { emptyCart } from "@/public/images/index";
import ItemCard from "@/app/components/cardPage/ItemCard";
import { spfTwo, spfThree } from "@/public/images/index";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "@/services/context/GlobalContext";
import ItemCardCheckout from "../components/cardPage/ItemCardCheckout";

const Card = () => {
  const { cart, clearCart } = useContext(GlobalContext);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  return (
    <div className="max-w-container mx-auto px-4">
      {cart?.cartItems && cart.cartItems.length > 0 ? (
        <div className="mdl:flex gap-4">
          <div className="w-full mdl:w-1/2 pb-20 ">
            <div className="mt-5">
              {cart?.cartItems.map((item) => (
                <div className="" key={item._id}>
                  {/* <ItemCard item={item} /> */}
                  <ItemCardCheckout item={item} />
                </div>
              ))}
            </div>
            <button
              onClick={clearCart}
              className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
            >
              Reset cart
            </button>

            <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
              <div className="flex items-center gap-4">
                <input
                  className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                  type="text"
                  placeholder="Coupon Number"
                />
                <p className="text-sm mdl:text-base font-semibold">
                  Apply Coupon
                </p>
              </div>
              <p className="text-lg font-semibold">Update Cart</p>
            </div>
            <div className="max-w-7xl gap-4 flex justify-end mt-4">
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-right">
                  Cart totals
                </h1>
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${totalAmt}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${shippingCharge}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      ${totalAmt + shippingCharge}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href="/">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mdl:w-1/2 h-[300px] bg-red-400 "></div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20 mt-4"
        >
          <div>
            <Image
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link href="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
