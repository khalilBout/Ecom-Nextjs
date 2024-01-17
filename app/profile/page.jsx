import { getAllOrderOfUser } from "@/services/getData/order/getAllOrderFroUser";
import InfoClient from "@/app/components/profilePage/InfoClient";
import OrderClient from "@/app/components/profilePage/OrderClient";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  // console.log("session from server:", session);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/account/login");
  }
  const email = session?.user.email;
  // console.log("email from server:", email);
  // const email = "get email from server";

  const { AllOrders } = await getAllOrderOfUser(email);
  return (
    <div>
      <InfoClient />
      <OrderClient AllOrders={AllOrders} />
    </div>
  );
};

export default page;
