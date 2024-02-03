"use client";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/Gr";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationCom = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 3;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className="flex items-center gap-2 mx-2">
        <button
          className={`${
            hasNext
              ? "border-[1px] border-gray-300 text-[#737373]"
              : "bg-primeColor text-white"
          } w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          <GrFormPrevious />
        </button>

        <div
          className="border-[1px] border-gray-300 text-[#737373] w-8 h-8 text-lg flex items-center justify-center cursor-pointer"
          disabled
        >
          {page}
        </div>

        <button
          className={`${
            hasPrev
              ? "border-[1px] border-gray-300 text-[#737373]"
              : "bg-primeColor text-white"
          } w-8 h-8 text-base flex items-center justify-center cursor-pointer`}
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};

export default PaginationCom;
