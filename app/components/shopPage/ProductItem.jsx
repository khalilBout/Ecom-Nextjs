import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  const listOfStoke = product?.listModels.map((item) => {
    const value = item.size.map((x) => x.stoke);
    const total = valueuce((a, c) => a + c, 0);
    return total;
  });
  const listOfColors = product?.listModels.map((item) => item.selectedColor);
  const globalStoke = listOfStoke.reduce((a, c) => a + c, 0);

  let allImages = [];
  product.listModels?.map((item) => {
    if (item.url.length > 0) {
      item.url.map((x) => allImages.push(x));
      return allImages;
    }
  });

  return (
    <Link
      href={`/product/${product.productName}`}
      key={item._id}
      onClick={() => {
        // setShowSearchBar(true);
        // setSearchQuery("");
      }}
      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
    >
      <img className="w-24" src={product.allImages[0]} alt="productImg" />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg">{product.title}</p>
        <p className="text-xs">{product.desc}</p>
        <p className="text-sm">
          Price:{" "}
          <span className="text-primeColor font-semibold">
            ${product.price}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
