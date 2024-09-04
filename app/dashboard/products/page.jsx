import Link from "next/link";
import { getProducts } from "@/services/getData/product/getFilterData";
import TableAllProduct from "@/app/components/dashboard/productPage/TableAllProduct";
import CategorySelect from "@/app/components/dashboard/productPage/CategorySelect";
import SearchComponent from "@/app/components/navbar/SearchInput";
import PaginationCom from "@/app/components/shopPage/uiShop/PaginationCom";

// images
import NoProduct from "@/public/images/emptyCart.png";
import Image from "next/image";

const pageProduct = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const category = searchParams?.category || "";

  const { allProducts, count } = await getProducts(search, page, category);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className="text-2xl p-2 font-medium">Manage Products</h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <CategorySelect />
            <div className="mr-4 grow">
              <SearchComponent />
            </div>
            <PaginationCom count={count} />
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/products/addProduct">
                <button className="mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  Add Product
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-full">
          {allProducts.length > 0 ? (
            <TableAllProduct data={allProducts} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                <Image
                  width={320}
                  height={180}
                  src={NoProduct}
                  alt="NoProduct"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageProduct;
