"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

const userData = () => {
  const router = useRouter();
  const [showUser, setShowUser] = useState(false);

  //   const [isAuthUser, setIsAuthUser] = useState(false);
  const session = useSession();

  console.log("session:", session);
  //   console.log("user:", user);
  const logout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/logout", {
        method: "GET",
      });
      const ruselt = await res.json();
      console.log("ruselt", ruselt);
      // toast.success("Logout successful");
      if (ruselt.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    // await axios.get("/api/user/logout");
  };
  return (
    <>
      <div className="relative">
        <div onClick={() => setShowUser(!showUser)} className="flex">
          {session && session.status === "authenticated" && (
            <div className=" p-2 w-[35px] h-[35px] rounded-full bg-green-100 border border-gray-300  flex justify-start items-center ">
              <Image
                width={20}
                height={20}
                className="rounded-full"
                //   src={session?.data.user.image}
                //   alt={session?.data.user.name}
                src=""
                alt=""
              />
            </div>
          )}
          {session && session.status === "unauthenticated" && (
            <FaUser size={22} />
          )}
          <div className="">
            <FaCaretDown size={22} />
          </div>
        </div>
        {showUser && (
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-8 right-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
          >
            {session && session.status === "authenticated" ? (
              <>
                <Link href={`/profile`} onClick={() => setShowUser(false)}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                </Link>

                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <Link href="/account/login" onClick={() => setShowUser(false)}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link
                  onClick={() => setShowUser(false)}
                  href="/account/register"
                >
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
              </>
            )}
          </motion.ul>
        )}
      </div>
    </>
  );
};

export default userData;
