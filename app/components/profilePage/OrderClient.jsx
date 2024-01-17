import React from "react";

const OrderClient = ({ AllOrders }) => {
  //   const ordersList = [];
  return (
    <>
      <div>
        <h2>My Order:</h2>
        {AllOrders?.map((item, index) => (
          <div key={index} className="p-4 bg-red-300 w-[500px] my-4">
            <h2>InfoAddress</h2>
            <h3>Client Name:{item.shippingAddress.clientName}</h3>
            <h3>address:{item.shippingAddress.address}</h3>
            <h3>wilai:{item.shippingAddress.willai}</h3>
            {item.orderProduct.map((item, index) => (
              <div key={index}>
                <h3>Product:{item.productTitle}</h3>
                <h3>price:{item.quantity}</h3>
                <h3>Qt:{item.finalPrice}</h3>
                <h3>
                  Process Order:
                  {item.isProcess ? <p>Completed</p> : <p>Processing</p>}
                </h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderClient;
