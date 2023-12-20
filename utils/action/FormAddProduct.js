"use client";
import React from "react";
const FormAddProduct = ({ handelChange }) => {
  const categoryList = ["man", "woman", "children"];
  const typeList = ["New", "Best", "Soled"];
  return (
    <form>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <input
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          placeholder="Name"
          type="text"
          name="title"
          onChange={handelChange}
        />
        <input
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3 "
          placeholder="desc..."
          type="text"
          name="desc"
          onChange={handelChange}
        />
        <input
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          placeholder="style"
          type="text"
          name="style"
          onChange={handelChange}
        />
        <input
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          placeholder="price"
          type="number"
          name="price"
          onChange={handelChange}
        />
        <input
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          placeholder="priceDrop"
          type="text"
          name="priceDrop"
          onChange={handelChange}
        />

        <select
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          name="category"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-300">
            category
          </option>
          {categoryList?.map((cty) => (
            <option key={cty} value={cty}>
              {cty}
            </option>
          ))}
        </select>
        <select
          className=" h-[50px] w-[1/2] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-3"
          name="type"
          onChange={handelChange}
        >
          <option value="" className="text-gray-300">
            type
          </option>
          {typeList?.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FormAddProduct;
