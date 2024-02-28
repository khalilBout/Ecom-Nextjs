import React from "react";
import { CldUploadButton } from "next-cloudinary";

const UploadImage = ({ setUrl }) => {
  const handelUpload = (result) => {
    const info = result.info;
    // const publicId = result.public_id;
    if ("secure_url" in info && "public_id" in info) {
      // data of image
      const urlImage = info.secure_url;
      const public_id = info.public_id;

      setUrl((prev) => [
        ...prev,
        {
          urlImage,
          public_id,
        },
      ]);
      // setPublicId((prev) => [...prev, public_id]);
    }
  };
  return (
    <div className="w-full h-full rounded-md border border-gray-200">
      <CldUploadButton
        uploadPreset="mugwi27x"
        className="w-full h-full py-2 px-1 text-[14px] rounded-xl bg-slate-100 cursor-pointer"
        onUpload={handelUpload}
      >
        Add Image
      </CldUploadButton>
    </div>
  );
};

export default UploadImage;
