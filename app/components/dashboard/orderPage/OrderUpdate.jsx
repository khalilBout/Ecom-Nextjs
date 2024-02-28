"use client";
import React, { useState } from "react";
import ProductOrder from "@/app/components/dashboard/orderPage/ProductOrder";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const OrderUpdate = ({ order }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    orderState: order.isProcess,
    clientName: order.shippingAddress?.clientName,
    addressDelivery: order.shippingAddress.address,
    willaiDelivery: order.shippingAddress.willai,
  });
  const [laudingSend, setLaudingSend] = useState(false);
  const [modelData, setModelData] = useState(order.orderProduct);
  const [deliveryTax, setDeliveryTax] = useState(order.taxDelivery);

  const totalPrice = modelData.reduce(
    (total, item) => item.finalPrice * item.quantity + total,
    0
  );
  // delete Model
  const deleteModel = (id) => {
    const newListModel = modelData?.filter((x) => x.idModel !== id);
    setModelData(newListModel);
  };
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const changeDeliveryTax = (e) => {
    setDeliveryTax(e.target.value);
  };
  const handelUpdateModel = (newOrder) => {
    const newList = [];
    modelData.map((x) => {
      if (x._id === newOrder._id) {
        newList.push(newOrder);
      } else {
        newList.push(x);
      }
    });
    setModelData(newList);
  };

  const newOrderData = {
    ...order,
    isProcess: false,
    taxDelivery: deliveryTax,
    shippingAddress: {
      clientName: form.clientName,
      address: form.addressDelivery,
      city: order.shippingAddress.city,
      phone: order.shippingAddress.phone,
      willai: form.willaiDelivery,
    },
    orderProduct: modelData,
  };
  const handelUpdateOrder = async () => {
    setLaudingSend(true);
    const id = order?._id;
    try {
      setLaudingSend(true);
      const res = await fetch(
        `http://localhost:3000/api/admin/orderAdmin/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newOrderData),
        }
      );

      if (res.status === 200) {
        toast.success("Order is valid.");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLaudingSend(false);
    }
  };
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md ">
      {laudingSend ? (
        <>Loading.....</>
      ) : (
        <>
          <header className="lg:flex justify-between mb-4 ">
            <div className="mb-4 lg:mb-0 w-full relative">
              {order.isProcess ? (
                <button
                  onClick={() => handelUpdateOrder()}
                  className={`absolute top-1 -right-1 px-2 py-1  rounded-md text-gray-700 ${
                    laudingSend
                      ? "bg-green-200 cursor-progress"
                      : "bg-green-400 cursor-pointer"
                  } `}
                >
                  valid
                </button>
              ) : (
                <></>
              )}

              <div className="w-full flex items-center gap-2">
                <h2 className="text-xl">
                  Order Create At:
                  <span className="text-gray-500"> 20:44 | 22/01/2023</span>
                </h2>
              </div>
              <h3 className="">
                User: <span className="text-gray-500">{order.userName}</span>
              </h3>
              <h3 className="">
                Email: <span className="text-gray-500">{order.email}</span>
              </h3>
              <h3 className="">
                Order State :
                {form.orderState === true ? (
                  <span className="text-red-500 px-2">
                    {/* • {order?.orderStatus.toUpperCase()} */}
                    Processing
                  </span>
                ) : (
                  <span className="text-green-500">
                    {/* • {order?.orderStatus.toUpperCase()} */}
                    Dane
                  </span>
                )}
              </h3>
            </div>
          </header>

          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <p className="text-blue-700 mb-1 text-xl">Client</p>
              <div className="">
                <label className="text-gray-900">Name: </label>
                <input
                  name="clientName"
                  onChange={handelChange}
                  className="text-gray-600 bg-red-50 border-b border-black outline-none"
                  value={form.clientName}
                />
                <h2>
                  Phone:
                  <span className="text-gray-500">
                    {order?.shippingAddress?.phone}
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <p className="text-blue-700 mb-1 text-xl">Delivery address</p>
              <div className="text-gray-600">
                <div className="">
                  <label className="text-gray-900">Address: </label>
                  <input
                    name="addressDelivery"
                    onChange={handelChange}
                    className="text-gray-600 bg-red-50 border-b border-black outline-none"
                    value={form.addressDelivery}
                  />
                </div>
                <div className="">
                  <label className="text-gray-900">Willai: </label>
                  <input
                    name="willaiDelivery"
                    onChange={handelChange}
                    className="text-gray-600 bg-red-50 border-b border-black outline-none"
                    value={form.willaiDelivery}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-blue-700 mb-1 text-xl">Payment</p>
              <ul className="text-gray-900">
                <li>
                  Total paid:
                  <span className="text-gray-600">{totalPrice} $</span>
                </li>

                <li className="flex gap-2">
                  <span className="">Tax Delivery:</span>
                  <input
                    name="taxDelivery"
                    type="number"
                    onChange={changeDeliveryTax}
                    className="text-gray-600 bg-red-50 border-b border-black outline-none w-[65px]"
                    value={deliveryTax}
                  />
                </li>

                <li>
                  <span className="">TTC: </span>
                  <span className="text-gray-600 px-1">
                    {totalPrice + +deliveryTax} $
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4" />
          {/* info of product ******************************************* */}
          <div className="block lg:grid lg:grid-cols-2 gap-2 ">
            {modelData?.map((item, index) => (
              <ProductOrder
                key={index}
                item={item}
                deleteModel={deleteModel}
                handelUpdateModel={handelUpdateModel}
              />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default OrderUpdate;
