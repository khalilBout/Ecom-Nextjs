import React from "react";

const InfoProduct = ({ product, globalStoke }) => {
  return (
    <div className="relative info mt-2">
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="text-xl sml:text-3xl font-bold text-gray-900">
          {product && product.title}
        </h1>
        <div className="mt-1 flex flex-col items-center justify-between space-y-4 py-2 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            <h1
              className={`text-xl sml:text-2xl font-bold text-gray-600 mr-2 ${
                globalStoke > 0 ? "line-through" : ""
              }`}
            >
              ${product && product.price}
            </h1>
            {globalStoke > 0 ? (
              <h1 className="text-xl sml:text-2xl font-bold text-red-700">
                {product && product.finalPrice}
              </h1>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="border-b border-gray-400">
            <h2 className="text-[14px] mdl:text-[16px]">Description</h2>
          </div>
          <div className=" flow-root text-gray-500 sm:mt-2">
            {product && product.desc}
          </div>
        </div>
      </div>

      {/* Select Size */}
    </div>
  );
};

export default InfoProduct;
