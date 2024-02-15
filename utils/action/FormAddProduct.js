"use client";
import React from "react";
const FormAddProduct = ({ handelChange }) => {
  const categoryList = ["man", "woman", "children"];
  const typeList = ["New", "Best", "Soled"];
  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="Name"
          type="text"
          name="title"
          onChange={handelChange}
        />

        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="style"
          type="text"
          name="style"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="price"
          type="number"
          name="price"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="priceDrop"
          type="text"
          name="priceDrop"
          onChange={handelChange}
        />

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          name="category"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            category
          </option>
          {categoryList?.map((cty) => (
            <option key={cty} value={cty}>
              {cty}
            </option>
          ))}
        </select>
        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          name="type"
          onChange={handelChange}
        >
          <option value="" className="text-gray-100">
            type
          </option>
          {typeList?.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <textarea
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 "
          placeholder="desc..."
          type="text"
          name="desc"
          rows={6}
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddProduct;
