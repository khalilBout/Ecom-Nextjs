import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { logoLight } from "@/public/images";

const Access = () => {
  return (
    <>
      <div className="w-[450px] max-h-[480px] bg-primeColor px-10 flex flex-col gap-6 justify-center">
        <Link href="/">
          <Image src={logoLight} alt="logoImg" className="w-28" />
        </Link>
        <div className="flex flex-col gap-1 -mt-1">
          <h1 className="font-titleFont text-xl font-medium">
            Get started for free
          </h1>
          <p className="text-base">Create your account to access more</p>
        </div>
        <div className="w-[300px] flex items-start gap-3">
          <span className="text-green-500 mt-1">
            <BsCheckCircleFill />
          </span>
          <p className="text-base text-gray-300">
            <span className="text-white font-semibold font-titleFont">
              Get started fast with OREBI
            </span>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            nisi dolor recusandae consectetur!
          </p>
        </div>
        <div className="w-[300px] flex items-start gap-3">
          <span className="text-green-500 mt-1">
            <BsCheckCircleFill />
          </span>
          <p className="text-base text-gray-300">
            <span className="text-white font-semibold font-titleFont">
              Access all OREBI services
            </span>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            nisi dolor recusandae consectetur!
          </p>
        </div>
        {/* <div className="w-[300px] flex items-start gap-3">
          <span className="text-green-500 mt-1">
            <BsCheckCircleFill />
          </span>
          <p className="text-base text-gray-300">
            <span className="text-white font-semibold font-titleFont">
              Trusted by online Shoppers
            </span>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            nisi dolor recusandae consectetur!
          </p>
        </div> */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            © OREBI
          </p>
          <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            Terms
          </p>
          <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            Privacy
          </p>
          <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
            Security
          </p>
        </div>
      </div>
    </>
  );
};

export default Access;
