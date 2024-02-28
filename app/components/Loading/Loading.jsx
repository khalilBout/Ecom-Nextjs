"use client";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center">
      <ScaleLoader color="#d66b36" />
    </div>
  );
};

export default Loading;
