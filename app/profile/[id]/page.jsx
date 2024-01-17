import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import InfoClient from "@/app/components/profilePage/InfoClient";
import OrderClient from "@/app/components/profilePage/OrderClient";
const page = async ({ params }) => {
  const id = params.id;
  const { AllOrders } = await getAllOrderOfUser(id);
  return (
    <div>
      <InfoClient />
      <OrderClient AllOrders={AllOrders} />
    </div>
  );
};

export default page;

// <>
//   <div className="w-full mx-4 my-2">
//     <div className="flex flex-col ">
//       <h1 className="my-1 text-2xl text-gray-700">User Info:</h1>
//       <h1 className="text-xl text-gray-600 font-titleFont">
//         Client :<span className="text-red-300"> {user.username} </span>{" "}
//       </h1>
//       <h1 className="text-xl text-gray-600 font-titleFont">
//         Email :<span className="text-red-300"> {user.email}</span>{" "}
//       </h1>
//     </div>
//     <div className="mx-4">
//       {AllOrders && AllOrders.length > 0 ? (
//         <div className="">
//           <h1 className="my-1 text-2xl text-gray-700">Ordered Info:</h1>

//           {AllOrders?.map((item, index) => (
//             <div key={index} className="bg-gray-100 m-2 p-2 rounded-md">
//               <h2 className="text-[20px] text-gray-900">
//                 Order {index + 1}
//               </h2>
//               <h2 className="text-[18px] text-gray-500">
//                 Ordered Address Info :{" "}
//               </h2>

//               <h3 className="text-gray-500">
//                 Client Name:{" "}
//                 <span className="text-red-300">
//                   {item.shippingAddress.clientName}
//                 </span>{" "}
//               </h3>
//               <h3 className="text-gray-500">
//                 Client Address:
//                 <span className="text-red-400">
//                   {" "}
//                   {item.shippingAddress.address}
//                 </span>{" "}
//               </h3>
//               <h3 className="text-gray-500">
//                 Client Phone:
//                 <span className="text-red-400">
//                   {" "}
//                   {item.shippingAddress.phone}
//                 </span>{" "}
//               </h3>
//               <h2 className="text-gray-500">List Of Product </h2>
//               <div className="flex gap-2">
//                 {item?.orderProduct.length > 0 &&
//                   item.orderProduct.map((product, index) => (
//                     <div className=" my-2 p-2 w-fit rounded-md bg-gray-200">
//                       <h3 className="text-gray-500">
//                         Product :{" "}
//                         <span className="text-red-400 ">
//                           {product.productTitle} X {product.quantity}
//                         </span>
//                       </h3>
//                       <div className="flex items-center gap-2">
//                         <h3 className="text-gray-500 ">
//                           Color and Size :{" "}
//                         </h3>

//                         <div
//                           className=" w-[16px] h-[16px] border border-gray-400 rounded-full"
//                           style={{ backgroundColor: product.Color }}
//                         ></div>
//                         <h2 className="text-red-400">
//                           {product.sizeSelect}
//                         </h2>
//                       </div>

//                       <h3 className="text-gray-500">
//                         Price :{" "}
//                         <span className="text-red-400">
//                           {product.finalPrice}
//                         </span>
//                       </h3>
//                     </div>
//                   ))}
//               </div>
//               <h2 className="text-gray-500 text-[18px]">
//                 Total Payment:{" "}
//                 <span className="text-green-500">{item.totolPyment} $</span>
//               </h2>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="flex justify-center w-full">
//           <h1 className="text-3xl font-bold text-rad-500 my-6 ">
//             No Order for{" "}
//             <span className="text-red-300 ">{user.username}</span>
//           </h1>
//         </div>
//       )}
//     </div>
//   </div>
// </>
