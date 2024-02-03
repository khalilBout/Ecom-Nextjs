import InfoClient from "@/app/components/profilePage/InfoClient";
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

  return (
    <>
      <InfoClient user={user} />
    </>
  );
};

export default page;
