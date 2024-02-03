import React from "react";
import { ScaleLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <ScaleLoader color="#d66b36" />
    </div>
  );
};

export default loading;
