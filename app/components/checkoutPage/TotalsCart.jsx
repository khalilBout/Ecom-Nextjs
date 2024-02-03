"use clinet";
import { GlobalContext } from "@/services/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const TotalsCart = () => {
  const { cart } = useContext(GlobalContext);

  const priceList = cart?.cartItems.map((x) => x.finalPrice * x.Qt);
  const totalPrice = priceList?.reduce((a, c) => a + c, 0);
  const shippingCharge = 100;

  return (
    <div className="max-w-7xl gap-4 flex justify-end mt-2">
      <div className="w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Cart Totals:</h1>
        <div>
          <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
            Subtotal
            <span className="font-semibold tracking-wide font-titleFont">
              ${totalPrice}
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
              ${totalPrice + shippingCharge}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalsCart;
