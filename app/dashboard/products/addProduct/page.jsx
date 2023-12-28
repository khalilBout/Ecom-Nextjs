"use client";
import React, { useState } from "react";
import FormAddProduct from "@/utils/action/FormAddProduct";
import ModelProduct from "@/app/components/dashboard/productPage/ModelProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    style: "",
    type: "",
    price: 0,
    priceDrop: 0,
    category: "",
  });
  const [pending, setPending] = useState(false);
  const [listModels, setListModels] = useState([]);

  const finalPrice = form?.price - form?.price * form?.priceDrop * 0.01;

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // add product to database
  const addProduct = async () => {
    try {
      setPending(true);
      fetch("/api/admin/productAdmin", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          finalPrice,
          listModels,
        }),
      });
      setPending(false);
      setForm({
        title: "",
        desc: "",
        style: "",
        type: "",
        price: 0,
        priceDrop: 0,
        category: "",
      });
      setListModels([]);
      router.replace("/dashboard/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-slate-200">
      <h1 className="my-3 text-xl md:text-3xl font-semibold text-black mb-8">
        Create New Product
      </h1>
      {/* info product  */}
      <div className="">
        <FormAddProduct handelChange={handelChange} />
      </div>
      <div className="m-2 p-2 border-1 rounded-lg">
        <ModelProduct
          caty={form.category}
          listModels={listModels}
          setListModels={setListModels}
        />

        {listModels && listModels.length > 0 ? (
          <>
            <hr />
            {listModels?.map((item, index) => (
              <div
                key={index}
                className="flex flex-row w-[200px] rounded-md bg-green-400 m-4"
              >
                <div className="m-3">
                  <Image
                    src={item.url[0]}
                    width={60}
                    height={60}
                    alt={item.selectedColor}
                  />
                </div>
                <div className="">
                  <div className="">
                    <h3 className="text-[12px]">size:</h3>
                    {item?.size.map((x) => (
                      <p className="text-[10px] px-">
                        {x.theSize} - {x.stoke} pice
                      </p>
                    ))}
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[12px]">color:</h3>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "100%",
                          backgroundColor: item.selectedColor,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        className={`flex justify-center items-center rounded border text-sm h-[50px] ${
          pending ? "text-gray-300 bg-red-100" : "bg-blue-400 text-gray-800"
        } `}
      >
        <button className="text-[16px] w-full h-full" onClick={addProduct}>
          {pending ? "Sending..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default Page;
