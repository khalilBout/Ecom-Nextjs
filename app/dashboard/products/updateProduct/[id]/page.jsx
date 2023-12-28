import { getProductById } from "@/services/getData/product";
import FormUpdateProduct from "@/utils/action/FormUpdateProduct";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const data = await getProductById(id);

  return <FormUpdateProduct data={data} />;
};

export default page;
