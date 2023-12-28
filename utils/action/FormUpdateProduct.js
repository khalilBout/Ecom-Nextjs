"use client";
import React, { useState } from "react";
import UpdateModel from "@/app/components/dashboard/productPage/UpdateModel";

const FormUpdateProduct = ({ data }) => {
  const categoryList = ["man", "woman", "children"];
  const typeList = ["New", "Best", "Soled"];
  const [form, setForm] = useState({
    title: data.title,
    desc: data.desc,
    style: data.style,
    type: data.type,
    price: data.price,
    priceDrop: data.priceDrop,
    category: data.category,
  });
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dataUpdated = {
    ...form,
  };

  const updateProduct = () => {
    console.log("update data:", dataUpdated);
  };
  return (
    <div>
      <form>
        <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
          <input
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            placeholder="Name"
            type="text"
            name="title"
            defaultValue={data.title}
            onChange={handelChange}
          />

          <input
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            placeholder="style"
            type="text"
            name="style"
            defaultValue={data.style}
            onChange={handelChange}
          />
          <input
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            placeholder="price"
            type="number"
            name="price"
            defaultValue={data.price}
            onChange={handelChange}
          />
          <input
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            placeholder="priceDrop"
            type="text"
            name="priceDrop"
            defaultValue={data.priceDrop}
            onChange={handelChange}
          />

          <select
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            name="category"
            defaultValue={data.category}
            onChange={handelChange}
            required
          >
            <option value="" className="text-gray-300 h-[40px]">
              category
            </option>
            {categoryList?.map((cty) => (
              <option key={cty} value={cty}>
                {cty}
              </option>
            ))}
          </select>
          <select
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1"
            name="type"
            defaultValue={data.type}
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

          <textarea
            className=" h-[40px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none m-1 "
            placeholder="desc..."
            type="text"
            name="desc"
            defaultValue={data.desc}
            onChange={handelChange}
          />
        </div>
      </form>
      <div className="">
        {data?.listModels.map((item, i) => (
          <UpdateModel key={i} models={item} />
        ))}
      </div>
      <button
        className="px-4 py-2 bg-blue-600 cursor-pointer"
        onClick={() => updateProduct()}
      >
        Update Product
      </button>
    </div>
  );
};

export default FormUpdateProduct;
