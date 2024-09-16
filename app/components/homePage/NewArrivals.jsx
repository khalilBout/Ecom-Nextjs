import React from "react";
import { getAllProducts } from "@/services/getData/product";
import Arrivals from "./Arrivals";

const NewArrivals = async () => {
  const AllProducts = await getAllProducts();
  const products = await AllProducts.slice(-8);
  return (
    <>
      <Arrivals products={products} />
    </>
  );
};

export default NewArrivals;
