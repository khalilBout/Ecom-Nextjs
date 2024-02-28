import Image from "next/image";
import React from "react";
import logo from "@/public/logo/F3.png";

const page = () => {
  return (
    <div className="w-[100vw] h-[80vh] flex justify-center items-center bg-blue-100">
      <div className="w-full h-full relative bg-red-100 flex justify-center items-center">
        <Image
          width={460}
          height={220}
          // fill
          // objectFit="cover"
          // objectPosition="center"
          alt="logo"
          src={logo}
        />
      </div>
    </div>
  );
};

export default page;
