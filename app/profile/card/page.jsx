"use client";
import React from "react";
import EmptyCard from "@/app/components/checkoutPage/EmptyCard";
import { useDispatch, useSelector } from "react-redux";
import { resetBasket } from "@/redux/CartSlice";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const cart = useSelector((state) => state.Cart.cartProducts);
  const dispatch = useDispatch();

  //   const {
  //     idProduct,
  //     idModel,
  //     titleProduct,
  //     imageModel,
  //     Qt,
  //     finalPrice,
  //     sizeSelect,
  //     Color,
  //     sizeSelectStoke,
  //   } = item;

  return (
    <>
      {cart && cart.length > 0 ? (
        <>
          <h2 class="text-lg font-semibold mb-3">Products in cart</h2>
          {cart?.map((item) => (
            <figure class="flex items-center mb-4 leading-5">
              <div>
                <div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
                  <Image
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    quality={80}
                    src={item.imageModel}
                    alt={item.titleProduct}
                  />
                  <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                    {item.Qt}
                  </span>
                </div>
              </div>
              <figcaption class="ml-3">
                <p>{item.titleProduct.substring(0, 50)}</p>
                <p class="mt-1 text-gray-400">Size: {item.sizeSelect}</p>
                <p class="mt-1 text-gray-400">
                  Total: ${item.Qt * item.finalPrice}
                </p>
              </figcaption>
            </figure>
          ))}
          <div className="flex justify-end space-x-2 mt-10">
            <button
              onClick={() => {
                dispatch(resetBasket());
              }}
              className="px-5 py-2 inline-block text-gray-700 bg-red-200 shadow-sm border border-gray-200 rounded-md hover:bg-red-400 hover:text-blue-600"
            >
              Reset Cart
            </button>
            <Link
              href="/checkout"
              className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
            >
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <EmptyCard />
      )}
    </>
  );
};

export default page;
