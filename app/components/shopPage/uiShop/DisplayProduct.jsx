import Product from "@/app/components/ProductItems/Product";

const DisplayProduct = ({ allProducts, count }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        {allProducts?.map((product) => (
          <div key={product._id} className="w-full">
            <Product product={product} />
          </div>
        ))}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <p className="text-base font-normal text-lightText">
          {/* Products from */}
          {/* {itemStart === 0 ? 1 : itemStart} to */}
          {/* {endOffset} */}
          all Product: {count}
        </p>
      </div>
    </div>
  );
};

export default DisplayProduct;
