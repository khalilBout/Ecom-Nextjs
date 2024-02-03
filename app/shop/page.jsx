import DisplayProduct from "@/app/components/shopPage/uiShop/DisplayProduct";
import ShopFilter from "@/app/components/shopPage/ShopFilter";
import PaginationCom from "@/app/components/shopPage/uiShop/PaginationCom";
import SortBy from "@/app/components/shopPage/uiShop/SortBy";
import SearchNav from "@/app/components/navbar/SearchNav";

import { getProducts } from "@/services/getData/product/getFilterData";

const page = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const category = searchParams?.category || "";
  const { allProducts, count } = await getProducts(search, page, category);

  return (
    <div className="mx-10">
      <SearchNav />
      <div className="max-w-container mx-auto px-4">
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full mt-2">
            <ShopFilter category={category} />
            {/* <SortBy /> */}
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between mt-2">
              <PaginationCom count={count} />
            </div>
            <DisplayProduct allProducts={allProducts} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
