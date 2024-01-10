import { getProductById } from "@/services/getData/product";
import FormUpdateProduct from "@/utils/action/FormUpdateProduct";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const data = await getProductById(id);

  return (
    <div className="w-full m-2">
      <h2 className="text-2xl font-bold m-2 ">
        Update Product: <span className="text-red-400"> {data.title}</span>
      </h2>
      <FormUpdateProduct data={data} />
    </div>
  );
};

export default page;
