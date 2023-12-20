import Login from "@/app/components/accountPage/Login";
import React from "react";
import Access from "@/app/components/accountPage/access";

const page = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
          <Access />
        </div>
        <Login />
      </div>
    </>
  );
};

export default page;
