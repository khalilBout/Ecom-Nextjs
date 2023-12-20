import React from "react";
import Product from "../ProductItems/Product";

import { getTypeProducts } from "@/services/getData/product/getTypeData";

const BestSellers = async () => {
  const res = await getTypeProducts("Best");
  const listProduct = res.slice(0, 4);

  return (
    <div className="w-full pb-20">
      <div className="text-3xl font-semibold pb-6">Our Bestsellers</div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {listProduct.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
