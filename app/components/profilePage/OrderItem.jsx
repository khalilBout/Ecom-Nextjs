import Image from "next/image";
import React from "react";

const OrderItem = ({ order, index }) => {
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
      <header className="lg:flex justify-between mb-4">
        <div className="mb-4 lg:mb-0 w-full">
          <div className="w-full flex justify-between">
            <h2 className="text-xl">Order # {index + 1} </h2>
            <p className="text-gray-500">20:44 | 22/01/2023</p>
          </div>
          <h3 className="">
            Order State :
            {order?.isProcess === true ? (
              <span className="text-red-500 px-2">
                {/* • {order?.orderStatus.toUpperCase()} */}
                Processing
              </span>
            ) : (
              <span className="text-green-500">
                {/* • {order?.orderStatus.toUpperCase()} */}
                "Dane"
              </span>
            )}
          </h3>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <p className="text-gray-500 mb-1 text-xl">Client</p>
          <ul className="text-gray-900">
            <li>
              Client Name:{" "}
              <span className="text-gray-500">
                {order?.shippingAddress?.clientName}
              </span>
            </li>
            <li>
              Client Address:{" "}
              <span className="text-gray-500">
                {order?.shippingAddress?.address}
              </span>
            </li>
            <li>
              Client Phone:{" "}
              <span className="text-gray-500">
                {order?.shippingAddress?.phone}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 mb-1 text-xl">Delivery address</p>
          <ul className="text-gray-600">
            <li>{order?.shippingAddress?.address}</li>
            <li>
              {order?.shippingAddress?.city}, {order?.shippingAddress?.willai}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 mb-1 text-xl">Payment</p>
          <ul className="text-gray-600">
            <li className="text-green-400">payment in Place</li>
            <li>Tax Delivery: $100</li>
            <li>Total paid: ${order?.totolPyment}</li>
          </ul>
        </div>
      </div>

      <hr className="my-4" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {order?.orderProduct?.map((item) => (
          <figure key={item.productTitle} className="flex flex-row mb-4 ">
            <div>
              <div className="relative block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                <Image
                  src={item?.imageModel}
                  fill
                  quality={80}
                  objectFit="cover"
                  objectPosition="center"
                  alt={item.productTitle}
                />
              </div>
            </div>
            <figcaption className="ml-3 text-gray-600">
              <p className="text-xl">{item.productTitle.substring(0, 35)}</p>
              <p className="text-[14px]">Drop:-{item.priceDrop} %</p>
              <p className="mt-1 font-semibold text-[16px]">
                {item.quantity}x = ${item.finalPrice * item.quantity}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
};

export default OrderItem;
