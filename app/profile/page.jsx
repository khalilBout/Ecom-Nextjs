import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import InfoClient from "@/app/components/profilePage/InfoClient";
import OrderClient from "@/app/components/profilePage/OrderClient";
import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user.email;

  // if client component use useSession
  //   const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login?callbackUrl=/profile");
  //   },
  // });

  const { AllOrders } = await getAllOrderOfUser(email);
  return (
    <div>
      <InfoClient />
      <OrderClient AllOrders={AllOrders} />
    </div>
  );
};

export default page;
