import Image from "next/image";
import React from "react";

const OrderInfo = ({ order }) => {
  const totalPrixProduct = order?.orderProduct.reduce(
    (total, item) => item.finalPrice * item.quantity + total,
    0
  );
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md ">
      <header className="lg:flex justify-between mb-4 ">
        <div className="mb-4 lg:mb-0 w-full relative">
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
            {order.isProcess === true ? (
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
            <h2>
              Name:
              <span className="text-gray-500">
                {order?.shippingAddress?.clientName}
              </span>
            </h2>
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

          <div className="">
            <h2 className="text-xl">
              Address:
              <span className="text-gray-500 ">
                {order?.shippingAddress?.address}
              </span>
            </h2>

            <h2 className="text-xl">
              Willai:
              <span className="text-gray-500">
                {order?.shippingAddress?.willai}
              </span>
            </h2>
          </div>
        </div>

        <div>
          <p className="text-blue-700 mb-1 text-xl">Payment</p>
          <ul className="text-gray-900">
            <li>
              Total Paid:{" "}
              <span className="text-gray-600">{totalPrixProduct} $</span>
            </li>
            <li>
              Tax Delivery:{" "}
              <span className="text-gray-600">{order.taxDelivery} $</span>
            </li>
            <li>
              TTC: <span className="text-gray-600">{order.totolPyment} $</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-4" />
      {/* info of product ******************************************* */}
      <div className="block lg:grid lg:grid-cols-2 gap-2 ">
        {order?.orderProduct?.map((item, index) => (
          <div key={index} className="flex rounded-md m-1 p-1 bg-slate-100">
            <div className="border bg-gray-300 relative w-[110px] h-[120px] rounded-md ">
              <Image
                src={item?.imageModel}
                fill
                objectFit="cover"
                objectPosition="center"
                alt={item.productTitle}
              />
            </div>
            <div className="grow px-2 py-1">
              <h2 className="xl text-gray-900 font-titleFont text-xl ">
                {item.productTitle}
              </h2>
              <div className="flex gap-2">
                <h2 className="xl text-gray-700">Color:</h2>
                <div
                  className={
                    "w-[20px] h-[20px] border-[1px] border-black mx-2 "
                  }
                  style={{
                    borderRadius: "100%",
                    backgroundColor: item.Color,
                    display: "inline-block",
                  }}
                ></div>
              </div>
              <div className="flex gap-2">
                <div>
                  <h2 className="text-gray-700">
                    Size:
                    <span className="text-red-400 mx-1 px-2 py-0.5 rounded-md bg-gray-100">
                      {item.sizeSelect}
                    </span>
                  </h2>
                </div>
                <div className="flex gap-1 text-gray-600">
                  <h2 className=""> | Qt:</h2>
                  <span className="text-red-400"> {item.quantity} </span>
                  <span> Pice </span>
                </div>
              </div>

              <div className="text-gray-700">
                <span className="">Price: </span>
                <span className="text-red-400 mx-1 px-2  ">
                  {item.finalPrice} $
                </span>
                <span className="text-gray-700 px-1  ">| Drop :</span>
                <span className="text-red-400 px-1"> {item.priceDrop} %</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default OrderInfo;
