"use client";
import React, { useContext, useState } from "react";
import ItemCard from "@/app/components/cardPage/ItemCard";

import { GlobalContext } from "@/services/context/GlobalContext";
import ItemCardCheckout from "../components/cardPage/ItemCardCheckout";
import EmptyCard from "../components/checkoutPage/EmptyCard";
import TotalsCart from "../components/checkoutPage/TotalsCart";
import Address from "../components/checkoutPage/Address";
import { addNewOrder } from "@/services/getData/order";
import axios from "axios";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cart, clearCart } = useContext(GlobalContext);
  const router = useRouter();
  const [addressClient, setAddressClient] = useState(null);

  const [user, setUser] = useState({
    userId: "",
    username: "",
    email: "",
  });

  const OrderData = {
    client: {
      userId: user?._id,
      userName: user?.username,
      email: user?.email,
    },
    shippingAddress: {
      clientName: addressClient?.clientName,
      address: addressClient?.address,
      city: addressClient?.city,
      phone: addressClient?.phone,
      willai: addressClient?.willai,
    },
    orderItems: cart?.cartItems?.map((item) => ({
      productID: item.idProduct,
      titleProduct: item.titleProduct,
      idModel: item.idModel,
      Qt: item.Qt,
      Color: item.Color,
      sizeSelect: item.sizeSelect,
    })),
  };
  const sendOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(OrderData),
      });

      if (response.status === 201) {
        clearCart();
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      {cart?.cartItems && cart.cartItems.length > 0 ? (
        <>
          <div className="mdl:flex gap-4">
            <div className="w-full mdl:w-1/2 pb-20 ">
              <div className="mt-5">
                {cart?.cartItems.map((item) => (
                  <div className="" key={item.titleProduct}>
                    <div className="sml:hidden">
                      <ItemCard item={item} />
                    </div>
                    <div className="hidden sml:block">
                      <ItemCardCheckout item={item} />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={clearCart}
                className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
              >
                Reset cart
              </button>
              {/* Totals Cart  */}
              <TotalsCart />
            </div>
            {/* Info Address  */}
            <div className="w-full mdl:w-1/2 mt-4">
              {addressClient === null ? (
                <>
                  <Address setAddressClient={setAddressClient} />
                </>
              ) : (
                <>
                  <h2 className="text-[red] text-3xl my-2">Client Info </h2>
                  <h3 className="text-xl mx-2">
                    Name:{addressClient.clientName}
                  </h3>
                  <h3 className="text-xl mx-2">Phone: {addressClient.phone}</h3>
                  <h3 className="text-xl mx-2">
                    Address: {addressClient.address}
                  </h3>
                  <h3 className="text-xl mx-2">City:{addressClient.city}</h3>
                  <h3 className="text-xl mx-2">
                    Willai:{addressClient.willai}
                  </h3>
                </>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={sendOrder}
              disabled={!addressClient}
              className={`${
                addressClient !== null
                  ? "bg-green-400 hover:bg-green-800 hover:text-white cursor-pointer"
                  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Send Order
            </button>
          </div>
        </>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default Checkout;

{
  /* <div className="flex justify-end ">
            <button
              onClick={handelOrder}
              className={`${
                addressClient !== null
                  ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Send Order
            </button>
          </div> */
}