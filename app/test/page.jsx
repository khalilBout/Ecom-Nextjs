"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, setOpenCart } from "@/redux/CartSlice";

const page = () => {
  const cart = useSelector((state) => state.Cart.cartProducts);
  const openCart = useSelector((state) => state.Cart.openCart);
  const dispatch = useDispatch();
  // console.log("cart:", cart);
  // console.log("openCart:", openCart);

  return (
    <div>
      <h1>page of redux:</h1>
      <button
        className="m-2 px-4 py-2 bg-red-300"
        onClick={() => dispatch(addToBasket({ id: "001" }))}
      >
        add value
      </button>
      <button
        className="m-2 px-4 py-2 bg-red-300"
        onClick={() => dispatch(setOpenCart())}
      >
        togale value
      </button>
    </div>
  );
};

export default page;
