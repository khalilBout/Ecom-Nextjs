"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import UploadImage from "./UploadImage";
import { useRouter } from "next/navigation";

const AddImageProduct = ({ url, setUrl }) => {
  const route = useRouter();
  const handelDeleteImage = async (id) => {
    console.log("url list 1:", url);
    const res = await fetch(`/api/deleteImage`, {
      method: "POST",
      body: JSON.stringify(id),
    });
    if (res.status === 200) {
      const newList = url.filter((item) => item.public_id !== id);
      setUrl(newList);
      console.log("list url2:", url);
      route.refresh();
    }
  };
  return (
    <>
      <div className="h-[150px] rounded-md m-1 flex gap-2 ">
        {url.length > 0 && (
          <div className=" bg-blue-100">
            <div className="flex gap-2">
              {url.map((item) => (
                <div
                  className=" w-[130px] h-full flex justify-center items-center rounded-lg relative"
                  key={item.urlImage}
                >
                  <Image
                    width={130}
                    height={150}
                    style={{ objectFit: "contain" }}
                    src={item.urlImage}
                    alt={item.urlImage}
                    className="rounded-lg w-[130px] h-[150px]"
                  />
                  <button
                    className="absolute top-1 right-1 p-1 rounded-full hover:bg-red-400 "
                    onClick={() => handelDeleteImage(item.public_id)}
                  >
                    <HiOutlineTrash size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-[110px] h-full">
          <UploadImage url={url} setUrl={setUrl} />
        </div>
      </div>
    </>
  );
};

export default AddImageProduct;
