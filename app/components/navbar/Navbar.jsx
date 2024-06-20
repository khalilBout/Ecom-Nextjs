"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// component
// import SearchNav from "@/app/components/navbar/SearchNav";
import UserData from "@/app/components/navbar/UserData";
import CardData from "@/app/components/navbar/CardData";
// images

// icons
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { useSession } from "next-auth/react";
// import Image from "next/image";

import { Logo } from "@/app/components/navbar/Logo";

const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
];
const Navbar = () => {
  const session = useSession();

  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <nav className="h-full px-8 max-w-container mx-auto relative">
          <div className="flex items-center justify-between h-full">
            <div className="w-150px overflow-hidden">
              <Logo />
            </div>

            <div className="flex">
              {showMenu && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-auto z-50 p-0 gap-2"
                >
                  <>
                    {navBarList.map((item) => (
                      <Link
                        key={item._id}
                        className="flex font-normal hover:font-bold font-bodyFont w-20 h-6 justify-center items-center px-6 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        href={item.link}
                      >
                        <li>{item.title}</li>
                      </Link>
                    ))}
                    {session?.status === "authenticated" &&
                    session?.data.user.role === "admin" ? (
                      <Link
                        key="dashboard"
                        className="flex hover:font-bold  w-20 h-6 justify-center items-center px-12 text-base text-red-400 font-bodyFont font-semibold hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 "
                        href="/dashboard"
                      >
                        <li>Dashboard</li>
                      </Link>
                    ) : (
                      <Link
                        key="contact"
                        className="flex font-normal font-bodyFont hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        href="/contact"
                      >
                        <li>Contact</li>
                      </Link>
                    )}
                  </>
                </motion.ul>
              )}

              {/* user Info  */}
              <div className="flex items-center">
                <div className="flex gap-4 items-center px-2 cursor-pointer ">
                  <UserData />
                  <CardData />
                </div>
                <div className="block mx-2 md:hidden">
                  <HiMenuAlt2
                    onClick={() => setSidenav(!sidenav)}
                    className="inline-block cursor-pointer w-8 h-6 "
                  />
                </div>
              </div>
              {sidenav && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[80%] h-full relative"
                  >
                    <div className="w-full h-full bg-primeColor p-6">
                      <ul className="text-gray-200 flex flex-col gap-2 mt-8">
                        {navBarList.map((item) => (
                          <li
                            className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                            key={item._id}
                          >
                            <Link
                              href={item.link}
                              // state={{ data: location.pathname.split("/")[1] }}
                              onClick={() => setSidenav(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <h1
                          onClick={() => setCategory(!category)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Category{" "}
                          <span className="text-lg">
                            {category ? "-" : "+"}
                          </span>
                        </h1>
                        {category && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">Man</li>
                            <li className="headerSedenavLi">Woman</li>
                            <li className="headerSedenavLi">Children</li>
                            <li className="headerSedenavLi">All</li>
                          </motion.ul>
                        )}
                      </div>
                      <div className="mt-4">
                        <h1
                          onClick={() => setBrand(!brand)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Brand
                          <span className="text-lg">{brand ? "-" : "+"}</span>
                        </h1>
                        {brand && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">New</li>
                            <li className="headerSedenavLi">Top</li>
                            <li className="headerSedenavLi">Best Sale</li>
                            <li className="headerSedenavLi">All</li>
                          </motion.ul>
                        )}
                      </div>
                    </div>
                    <span
                      onClick={() => setSidenav(false)}
                      className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                    >
                      <MdClose />
                    </span>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
