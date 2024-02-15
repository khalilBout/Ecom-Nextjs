"use client";
import React, { useState } from "react";
import UpdateModel from "@/app/components/dashboard/productPage/UpdateModel";
import ModelProduct from "@/app/components/dashboard/productPage/ModelProduct";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FormUpdateProduct = ({ data }) => {
  const categoryList = ["man", "woman", "children"];
  const typeList = ["New", "Best", "Soled"];
  const [addModel, setAddModel] = useState(false);
  const [laudingSend, setLaudingSend] = useState(false);
  const [listModels, setListModels] = useState(data.listModels);

  const [form, setForm] = useState({
    title: data.title,
    desc: data.desc,
    style: data.style,
    type: data.type,
    price: data.price,
    priceDrop: data.priceDrop,
    category: data.category,
  });
  const category = data?.category;
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // delete Model
  const deleteModel = (id) => {
    const newList = listModels?.filter((x) => x._id !== id);
    setListModels(newList);
  };

  // Fanction Update Models Data
  const [modelChanged, setModelChanged] = useState([]);
  const updateModels = () => {
    let modelDataSending = [];
    if (modelChanged.length > 0) {
      // add element no changed

      const modelNoChange = [];
      const listId = modelChanged.map((item) => {
        return item._id;
      });
      listModels.map((item) => {
        const isInListChangeModel = listId.includes(item._id);
        if (!isInListChangeModel) {
          modelNoChange.push(item);
        }
      });
      modelDataSending = [...modelChanged, ...modelNoChange];
    } else {
      listModels?.map((x) => modelDataSending.push(x));
    }
    // all data of product
    const dataUpdated = {
      ...form,
      modelDataSending,
    };

    return dataUpdated;
  };

  // Sending Update Data
  const sendUpdateData = async () => {
    const dataUpdated = updateModels();
    const id = data?._id;
    try {
      setLaudingSend(true);
      const res = await fetch(
        `http://localhost:3000/api/admin/productAdmin/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${Cookies.get("token")}`,
          },
          cache: "no-store",
          body: JSON.stringify(dataUpdated),
        }
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      setLaudingSend(false);
    }
  };

  return (
    <div>
      {/* info of Product  */}
      <form>
        <div className="gap-1 mx-2 ">
          <div className="flex">
            <input
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
              placeholder="Name"
              type="text"
              name="title"
              defaultValue={data.title}
              onChange={handelChange}
            />
            <input
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
              placeholder="style"
              type="text"
              name="style"
              defaultValue={data.style}
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <input
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
              placeholder="price"
              type="number"
              name="price"
              defaultValue={data.price}
              onChange={handelChange}
            />
            <input
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
              placeholder="priceDrop"
              type="text"
              name="priceDrop"
              defaultValue={data.priceDrop}
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <select
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
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
              className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
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
          </div>

          <textarea
            className="w-full mdl:w-1/2 h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 "
            placeholder="desc..."
            type="text"
            name="desc"
            rows={6}
            defaultValue={data.desc}
            onChange={handelChange}
          />
        </div>
      </form>
      {/* info of model of product  */}
      <div className="w-full ">
        <h2 className="text-2xl my-2 ">Update Info Models</h2>
        <div className="w-full flex justify-start flex-col gap-2 my-2 ">
          {listModels?.map((item, i) => (
            <div className="mx-[40px]" key={i}>
              <UpdateModel
                models={item}
                category={category}
                modelChanged={modelChanged}
                setModelChanged={setModelChanged}
                deleteModel={deleteModel}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add models  */}
      <div>
        {addModel && (
          <div className=" w-full p-2 relative">
            <ModelProduct
              caty={category}
              listModels={listModels}
              setListModels={setListModels}
            />
            <button
              onClick={() => setAddModel(false)}
              className="flex justify-center items-center p-1 text-xl font-bold bg-red-300 rounded-full absolute top-4 right-4"
            >
              <IoIosCloseCircleOutline size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between mx-4">
        {/* Btn Add Model   */}
        {!addModel && (
          <div className="flex justify-end">
            <button
              className="w-1/2 px-4 py-2 bg-blue-400 cursor-pointer rounded-md"
              onClick={() => setAddModel(!addModel)}
            >
              Add Models
            </button>
          </div>
        )}

        {/* Btn Send Update Data   */}
        <button
          className={` ${
            laudingSend === true
              ? "bg-gray-300 text-primeColor cursor-move"
              : "bg-primeColor text-lightText "
          } px-4 py-2 my-2 cursor-pointer rounded-md w-full`}
          disabled={laudingSend === true}
          onClick={() => sendUpdateData()}
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default FormUpdateProduct;
