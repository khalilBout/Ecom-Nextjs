"use client";
import React, { useContext, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { useDebouncedCallback } from "use-debounce";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { GlobalContext } from "@/services/context/GlobalContext";
import ItemCard from "@/app/components/cardPage/ItemCard";
import Image from "next/image";
import { emptyCart } from "@/public/images/index";

const SearchBar = () => {
  const { cart, isAuthUser, user, setIsAuthUser } = useContext(GlobalContext);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  const [showCard, setShowCard] = useState(false);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

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
      <div className="w-full bg-[#F5F5F3] relative">
        <div className="max-w-container mx-auto">
          <div className=" flex flex-col lg:flex-row lg:items-center justify-between w-full px-4 pb-4 lg:mb-2 h-full lg:h-20">
            {/* category bar */}
            <div
              className="flex h-12 cursor-pointer items-center gap-2 text-primeColor"
              onClick={() => setShow(!show)}
            >
              <HiOutlineMenuAlt4 className="w-5 h-5" />
              <p className="text-[14px] font-normal">Shop by Category</p>
              {show && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
                >
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Man
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Women
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Children
                  </li>
                </motion.ul>
              )}
            </div>
            {/* search bar */}
            <div className="relative w-full lg:w-[500px] h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
              <input
                className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                placeholder="Search your products here"
              />
              <FaSearch className="w-5 h-5" />
            </div>
            {/* user bar */}
            <div className="flex gap-4 mt-2 lg:mt-0 justify-end items-center pr-6 cursor-pointer relative">
              <div onClick={() => setShowUser(!showUser)} className="flex ">
                {user ? (
                  <>
                    <div className="w-[30px] h-[30px] rounded-full bg-green-400 border-[red] border-[1px] flex justify-start items-center ">
                      <p>{user?.username}</p>
                    </div>
                  </>
                ) : (
                  <FaUser size={22} />
                )}
                <FaCaretDown size={22} />
              </div>
              {showUser && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-8 right-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                >
                  {isAuthUser ? (
                    <>
                      <Link href="/profile" onClick={() => setShowUser(false)}>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Profile
                        </li>
                      </Link>

                      <li
                        onClick={() => {
                          setShowUser(false);
                          logout();
                        }}
                        className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer"
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/account/login"
                        onClick={() => setShowUser(false)}
                      >
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
              <div>
                <div className="relative">
                  <FaShoppingCart onClick={() => setShowCard(!showCard)} />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                    {/* {products.length > 0 ? products.length : 0} */}
                    {cart?.cartItems ? <> {cart?.cartItems.length} </> : <>0</>}
                  </span>
                  {/* card box */}
                  {showCard && (
                    <motion.ul
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-8 right-0 z-50 bg-primeColor w-[320px] text-[#767676] h-auto px-4 pb-2"
                    >
                      {cart?.cartItems.length > 0 ? (
                        <>
                          {cart?.cartItems.map((item, index) => (
                            <ItemCard key={index} item={item} />
                          ))}
                          <div className=" my-2 w-full h-[35px]">
                            <Link
                              href="/checkout"
                              className="w-full h-full bg-green-200 text-lightText hover:bg-lightText hover:text-primeColor cursor-pointer flex justify-center items-center"
                              onClick={() => setShowCard(false)}
                            >
                              Checkout
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="my-4 flex flex-col items-center justify-center ">
                            <Image
                              className="w-40 rounded-lg p-4 mx-auto"
                              src={emptyCart}
                              alt="emptyCart"
                            />
                            <Link href="/shop">
                              <button className="border bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                                Go Shopping
                              </button>
                            </Link>
                          </div>
                          {/* <EmptyCard /> */}
                        </>
                      )}
                    </motion.ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
