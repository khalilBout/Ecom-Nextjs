"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import empty from "@/public/empty.png";
const ImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const searchParams = useSearchParams();
  const colorProduct = searchParams.get("color");

  ////////////////////////////////
  // fitch all image of product
  let allImages = [];
  product?.listModels?.map((item) => {
    if (item.url.length > 0) {
      item.url.map((x) => allImages.push(x));
      return allImages;
    }
  });
  /////////////////////////////////////
  // fitch data of model and image of this model
  let modelImages = [];
  if (colorProduct !== null) {
    const currentModel = product?.listModels.find(
      (item) => item.selectedColor === colorProduct
    );
    const { url } = currentModel;
    url.map((item) => modelImages.push(item));
  }

  /////////////////////////////////////////////////
  // select image display
  if (
    colorProduct === undefined ||
    colorProduct === null ||
    colorProduct === ""
  ) {
    var displayImage = allImages;
  } else {
    var displayImage = modelImages;
  }
  ////////////////////////////////

  return (
    <div className="images flex flex-col-reverse sml:flex-row ">
      <div className="all-images flex flex-row col-span-2 sml:flex-col justify-center mx-4 gap-2">
        {displayImage?.map((url, index) => (
          <div key={index} className="image relative rounded-lg">
            <Image
              onClick={() => setSelectedImage(index)}
              className={` rounded-lg mb-3 p-1 object-cover object-top ${
                selectedImage === index
                  ? "border-[1px] border-purple-500"
                  : "border-[1px] border-purple-200"
              }`}
              src={url}
              width={70}
              height={70}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center m-2">
        {displayImage.length === 0 ? (
          <>
            <Image
              src={empty}
              className=" object-cover object-top border-[1px] border-purple-200"
              alt=""
              height={600}
              width={400}
            />
          </>
        ) : (
          <div className="selected-image col-span-5">
            <Image
              src={displayImage[selectedImage]}
              className=" object-cover object-top border-[1px] border-purple-200"
              alt=""
              height={600}
              width={400}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
