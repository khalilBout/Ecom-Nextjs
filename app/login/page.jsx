import { NextResponse } from "next/server";
import Login from "@/app/components/accountPage/Login";
import React from "react";
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
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
          <Access />
        </div>
        <Login />
      </div>
    </>
  );
};

export default page;
