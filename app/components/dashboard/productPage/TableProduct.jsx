import BtnDelete from "@/utils/action/BtnDelete";
import Link from "next/link";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

export default function TableProduct({ data }) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="min-w-[60] py-4">
            <span className="text-gray-200">Image</span>
          </th>
          <th className="w-[160px] py-4">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="w-[85px] py-4">
            <span className="text-gray-200">Price</span>
          </th>
          <th className="w-[50px] py-4">
            <span className="text-gray-200">Discount</span>
          </th>
          <th className="w-[50px] py-4">
            <span className="text-gray-200">Category</span>
          </th>
          <th className="w-[510px] py-4">
            <span className="text-gray-200">details</span>
          </th>
          <th className="w-[140px] py-4">
            <span className="text-gray-200">On Stoke</span>
          </th>
          <th className="w-[50px] py-4 ">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data?.map((item, i) => (
          <Tr item={item} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ item }) {
  // const { name, avatar, email, salary, date, status } = item;
  const {
    _id,
    title,
    price,
    priceDrop,
    category,
    listModels,
    type,
    createdAt,
  } = item;
  // const {size, selectedColor, url}=listModels
  const StokeOfModel = listModels?.map((item) => {
    const value = item.size.map((x) => x.stoke);
    const total = value.reduce((a, c) => a + c, 0);
    return total;
  });

  const globalStoke = StokeOfModel?.reduce((a, c) => a + c, 0);

  return (
    <>
      <tr className="bg-gray-50 my-6">
        <td className="min-w-[60] px-4">
          <img
            src={listModels && listModels[0].url}
            alt="productImage"
            className="h-[35px] w-[35px] rounded-full object-cover overflow-hidden bg-teal-400"
          />
        </td>
        <td className="w-[160px] px-4">
          <span className="text-center ml-2 font-semibold">{title}</span>
        </td>
        <td className="w-[85px] px-4">
          <span>{price} $</span>
        </td>
        <td className="w-[50px] px-4">
          <span>{priceDrop} %</span>
        </td>
        <td className="w-[50px] px-4">
          <span>{category}</span>
        </td>
        <td className="w-[50px] px-4">
          {listModels?.map((item, i) => (
            <div key={i} className="flex justify-start items-center">
              <span
                className={` mx-2 w-[20px] h-[20px] rounded-full bg-[${item?.selectedColor}]`}
                style={{
                  borderRadius: "100%",
                  backgroundColor: item?.selectedColor,
                  display: "inline-block",
                }}
              ></span>
              <span className="">
                {item?.size.map((x, i) => (
                  <span className=" bg-gray-200 rounded-md px-2 mx-1">
                    {x?.theSize}/{x?.stoke} Pic
                  </span>
                ))}
              </span>
            </div>
          ))}
        </td>
        <td className="w-[140px] px-4">
          <span>
            {globalStoke > 0 ? (
              <p className="text-green-600 text-[14px] font-medium">On Stoke</p>
            ) : (
              <p className="text-red-600 text-[14px] font-medium">Seller</p>
            )}
          </span>
        </td>
        <td className="w-[50px] h-[30px] flex justify-center items-center gap-2">
          <Link
            href={`/dashboard/products/updateProduct/${_id}`}
            className="cursor-pointer"
          >
            <BiEdit size={20} color={"rgb(34,197,94)"}></BiEdit>
          </Link>
          <BtnDelete url={`/admin/productAdmin/${_id}`} />
        </td>
      </tr>
      <hr className="" />
    </>
  );
}
