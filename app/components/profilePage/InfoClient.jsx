"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@/services/context/GlobalContext";
import Image from "next/image";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InfoClient = ({ user }) => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  const { cart, clearCart } = useContext(GlobalContext);
  // const userId = user?.id;

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("id", userId);
  //   replace(`${pathname}?${params}`);
  // }, [userId]);

  return (
    <div>
      <h1>
        Name:<span className="text-red-400">{user?.name}</span>
      </h1>
      <h1>
        Email:<span className="text-red-400">{user?.email}</span>
      </h1>
      <Image
        width={90}
        height={90}
        src={user?.image}
        alt={user?.name}
        className="w-[90px] h-[90px] rounded-full bg-green-100 "
      />
      <div className="">
        <h2>My Product Card </h2>
        {cart?.cartItems && cart.cartItems.length > 0 ? (
          <>
            {cart?.cartItems.map((item) => (
              <div className=" bg-gray-300 rounded-md flex w-[350px]">
                <img
                  className=" mx-2 w-[50px] h-[50px] rounded-full "
                  src={item.imageModel}
                  alt={item.titleProduct}
                />
                <div className="">
                  <h3>
                    Product:
                    <span className="text-red-400">{item.titleProduct}</span>
                  </h3>
                  <h3>
                    price:
                    <span className="text-red-400">{item.finalPrice}</span>
                  </h3>
                  <h3>
                    Qt:<span className="text-red-400">{item.Qt} </span>
                  </h3>
                  <button
                    className="bg-red-700 px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => clearCart()}
                  >
                    clearCart
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <p>Cart is empty</p>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoClient;
