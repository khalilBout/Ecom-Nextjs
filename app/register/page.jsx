import React from "react";
import Register from "@/app/components/accountPage/Register";
import Access from "@/app/components/accountPage/Access";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  // checked if user login redirect him to home page .
  const session = await getServerSession();
  if (session) {
    redirect("/?callbackUrl=/login");
  }
  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <Access />
      </div>
      <Register />
    </div>
  );
};

export default page;
