import React from "react";
import Brand from "./uiShop/shopBy/Brand";
import Category from "./uiShop/shopBy/Category";
import Color from "./uiShop/shopBy/Color";
import Price from "./uiShop/shopBy/Price";

const ShopFilter = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      {/* <Color /> */}
      <Brand />
      {/* <Price /> */}
    </div>
  );
};

export default ShopFilter;
