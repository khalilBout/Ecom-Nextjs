import React from "react";
import { getAllProducts } from "@/services/getData/product";
import Arrivals from "./Arrivals";

const NewArrivals = async () => {
  const products = await getAllProducts();
  return (
    <>
      <Arrivals products={products} />
    </>
  );
};

export default NewArrivals;
