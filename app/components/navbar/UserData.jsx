"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserImg from "@/public/images/user.png";
import adminImg from "@/public/images/admin.png";

const userData = () => {
  const router = useRouter();
  const [showUser, setShowUser] = useState(false);

  const session = useSession();
  return (
    <>
      <div className="relative">
        <div onClick={() => setShowUser(!showUser)} className="flex items-end">
          {session && session.status === "authenticated" && (
            <div className="flex justify-start items-center ">
              {session.status === "admin" ? (
                <Image
                  width={35}
                  height={35}
                  className="rounded-full"
                  src={UserImg}
                  alt={session?.data.user.name}
                />
              ) : (
                <div className="rounded-full bg-blue-200 w-[34px] h-[34px] flex justify-center items-center">
                  <Image
                    width={28}
                    height={28}
                    className=""
                    src={session?.data.user.image || adminImg}
                    alt={session?.data.user.name}
                  />
                </div>
              )}
            </div>
          )}
          {session && session.status === "unauthenticated" && (
            <FaUser size={22} />
          )}
          {/* <div className="">
            <FaCaretDown size={22} />
          </div> */}
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
                <Link href="/login" onClick={() => setShowUser(false)}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} href="/register">
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
