"use client";
import React from "react";
const FormAddProduct = ({ handelChange }) => {
  const categoryList = ["man", "woman", "children"];
  const typeList = ["new", "best", "soled"];
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
          placeholder="Price"
          type="number"
          name="price"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="Price Drop"
          type="text"
          name="priceDrop"
          onChange={handelChange}
        />

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="category"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            Category
          </option>
          {categoryList?.map((cty) => (
            <option key={cty} value={cty}>
              {cty.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="type"
          onChange={handelChange}
        >
          <option value="" className="text-gray-100">
            Type
          </option>
          {typeList?.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="m-2">
        <textarea
          rows={6}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="Description "
          type="text"
          name="desc"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddProduct;
