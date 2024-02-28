"use client";
import React, { useState } from "react";
import ItemCard from "@/app/components/cardPage/ItemCard";

import ItemCardCheckout from "../components/cardPage/ItemCardCheckout";
import EmptyCard from "../components/checkoutPage/EmptyCard";
import TotalsCart from "../components/checkoutPage/TotalsCart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { resetBasket } from "@/redux/CartSlice";
import toast from "react-hot-toast";
import FormAddAddress from "@/utils/action/FormAddAddress";
import FormUpdateAddress from "@/utils/action/FormUpdateAddress";
import axios from "axios";
import Loading from "@/app/components/Loading/Loading";

const Checkout = () => {
  const session = useSession();
  const cart = useSelector((state) => state.Cart.cartProducts);
  const dispatch = useDispatch();
  const router = useRouter();
  const [addressClient, setAddressClient] = useState(null);
  const [addressClientUpdated, setAddressClientUpdated] = useState("");
  const [loading, setLoading] = useState(false);
  const [taxDelivery, setTaxDelivery] = useState(800);

  const updateInfo = (e) => {
    e.preventDefault();
    setAddressClientUpdated("update");
  };
  // if (addressClient?.willai === "alger") {
  //   setTaxDelivery(600);
  // }
  const OrderData = {
    userName: session?.data?.user.name || null,
    email: session?.data?.user.email || null,
    shippingAddress: {
      clientName: addressClient?.clientName,
      address: addressClient?.address,
      city: addressClient?.city,
      phone: addressClient?.phone,
      willai: addressClient?.willai,
    },
    orderItems: cart?.map((item) => ({
      productID: item.idProduct,
      titleProduct: item.titleProduct,
      idModel: item.idModel,
      Qt: item.Qt,
      Color: item.Color,
      imageModel: item.imageModel,
      sizeSelect: item.sizeSelect,
    })),
    taxDelivery: taxDelivery,
  };
  const sendOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/order", OrderData);
      if (response.status === 201) {
        dispatch(resetBasket());
        toast.success("add your Order ..");
        router.push("/");
      }
    } catch (e) {
      toast.error(e, "no product sending ...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-container mx-auto px-4">
          {cart?.length > 0 ? (
            <>
              <div className="mdl:flex gap-2">
                <div className="w-full mdl:w-1/2 pb-8 ">
                  <div className="mt-5">
                    {cart?.map((item, ind) => (
                      <div className="" key={ind}>
                        <div className="hidden sml:block">
                          <ItemCardCheckout item={item} />
                        </div>
                        <div className="block sml:hidden">
                          <ItemCard item={item} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      // onClick={clearCart}
                      onClick={() => {
                        dispatch(resetBasket());
                        toast.success("your cart is empty ..");
                      }}
                      className="my-2 py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
                    >
                      Reset cart
                    </button>
                  </div>
                  {/* Totals Cart  */}
                  <TotalsCart taxDelivery={taxDelivery} />
                </div>
                {/* user info  */}

                {/* Info Address  */}
                <div className="w-full mdl:w-1/2 mt-4">
                  <div className="">
                    {session.status === "loading" && <p>loading...</p>}
                    {session.status === "authenticated" && (
                      <>
                        <p className="text-[18px] sm:text-[22px]">
                          Hi{" "}
                          <span className="text-[red]">
                            {session?.data?.user.name}
                          </span>
                          , welcome to E-commerce .
                        </p>
                      </>
                    )}
                    {session.status === "unauthenticated" && (
                      <div className="flex justify-between items-center bg-red-100 px-4 py-2">
                        <h2 className="text-xl mdl:2xl">
                          Hi , You Are Not Login...{" "}
                        </h2>
                        <Link
                          href="/login"
                          className="bg-green-200 px-4 py-1 text-xl mdl:2xl rounded-lg cursor-pointer hover:bg-slate-400"
                        >
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                  {addressClient === null && addressClientUpdated === "" && (
                    <FormAddAddress setAddressClient={setAddressClient} />
                  )}

                  {addressClient !== null && addressClientUpdated === "" && (
                    <div>
                      <h2 className="text-[red] text-2xl bg-gray-300 my-2 px-1 py-2">
                        Sipping Info Client
                      </h2>
                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        Name:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.clientName}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        Phone:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.phone}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        Address:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.address}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        City:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.city}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        Willai:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.willai}
                        </span>
                      </h3>
                      <div className="flex justify-end w-full">
                        <button
                          className="bg-green-200 hover:bg-green-400 cursor-pointer px-2 py-1 my-2 rounded-md font-medium font-titleFont"
                          onClick={updateInfo}
                        >
                          Update Info
                        </button>
                      </div>
                    </div>
                  )}

                  {addressClient !== null &&
                    addressClientUpdated === "update" && (
                      <FormUpdateAddress
                        addressClient={addressClient}
                        setAddressClient={setAddressClient}
                        setAddressClientUpdated={setAddressClientUpdated}
                      />
                    )}
                </div>
              </div>
              {/* Btn Send Order  */}
              <div className="my-2">
                <button
                  onClick={sendOrder}
                  disabled={!addressClient}
                  className={`${
                    addressClient !== null
                      ? "bg-green-400 hover:bg-green-800 hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  {loading ? <>loading...</> : <>Send Order</>}
                </button>
              </div>
            </>
          ) : (
            <EmptyCard />
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
