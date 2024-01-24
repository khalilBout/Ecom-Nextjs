import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import InfoClient from "@/app/components/profilePage/InfoClient";
import OrderClient from "@/app/components/profilePage/OrderClient";
import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

const page = async () => {
  const { user } = await getServerSession();

  // if client component use useSession
  //   const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login?callbackUrl=/profile");
  //   },
  // });

  const { AllOrders } = await getAllOrderOfUser(user.email);
  return (
    <div>
      <InfoClient user={user} />
      <OrderClient AllOrders={AllOrders} />
    </div>
  );
};

export default page;
