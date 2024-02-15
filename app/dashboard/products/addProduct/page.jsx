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
      const res = await fetch("/api/admin/productAdmin", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          finalPrice,
          listModels,
        }),
      });
      // const data = await res.json();
      if (res.status === 201) {
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
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full bg-slate-200">
      {pending ? (
        <> add product ...</>
      ) : (
        <>
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
                <hr className=" border-1 border-red-900" />
                <div className="flex gap-2 bg-blue-100">
                  {listModels?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row w-[200px] m-4 border-r-2 border-red-900"
                    >
                      <div className="my-1 mr-2 bg-slate-50 rounded-md">
                        <Image
                          src={item.url[0]}
                          width={100}
                          height={130}
                          alt={item.selectedColor}
                          className="rounded-md"
                        />
                      </div>
                      <div className="my-1">
                        <div className="">
                          <h3 className="text-[14px] ">Size</h3>
                          {item?.size.map((x) => (
                            <div className="flex justify-start items-center">
                              <p className="w-[35px] font-bold px-2 text-[13px] text-red-500">
                                {x.theSize}:
                              </p>
                              <p className="text-[11px]">{x.stoke} Pice</p>
                            </div>
                          ))}
                          <div className="flex gap-2 items-center">
                            <h3 className="text-[14px]">Color</h3>
                            <div
                              style={{
                                width: "15px",
                                height: "15px",
                                borderRadius: "100%",
                                backgroundColor: item.selectedColor,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
        </>
      )}
    </div>
  );
};

export default Page;
