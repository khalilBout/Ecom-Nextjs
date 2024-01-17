import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  console.log("session:", session);

  return <div>page</div>;
};

export default page;
