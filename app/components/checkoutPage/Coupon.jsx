import React from "react";

const Coupon = () => {
  return (
    <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
      <div className="flex items-center gap-4">
        <input
          className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
          type="text"
          placeholder="Coupon Number"
        />
        <p className="text-sm mdl:text-base font-semibold">Apply Coupon</p>
      </div>
    </div>
  );
};

export default Coupon;
