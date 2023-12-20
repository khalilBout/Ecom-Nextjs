import React from "react";
import Register from "@/app/components/accountPage/Register";
import Access from "@/app/components/accountPage/access";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <Access />
      </div>
      <Register />
    </div>
  );
};

export default page;
