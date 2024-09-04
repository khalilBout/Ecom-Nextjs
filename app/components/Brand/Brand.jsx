"use client";
import Image from "next/image";
import React from "react";

import brand1 from "@/public/images/brand/logo-acme.png";
import brand2 from "@/public/images/brand/logo-apex.png";
import brand3 from "@/public/images/brand/logo-celestial.png";
import brand4 from "@/public/images/brand/logo-echo.png";
import brand5 from "@/public/images/brand/logo-pulse.png";
import brand6 from "@/public/images/brand/logo-quantum.png";

import { motion } from "framer-motion";
const Brands = () => {
  return (
    <div className="py-4 md:py-8 overflow-hidden bg-white ">
      <div className="flex w-full justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex justify-center gap-14 pr-14"
        >
          <Image src={brand1} className="brand-logo" alt="brand1" />
          <Image src={brand2} className="brand-logo" alt="brand2" />
          <Image src={brand3} className="brand-logo" alt="brand3" />
          <Image src={brand4} className="brand-logo" alt="brand4" />
          <Image src={brand5} className="brand-logo" alt="brand5" />
          <Image src={brand6} className="brand-logo" alt="brand6" />
          {/* secent part  */}
          <Image src={brand1} className="brand-logo" alt="brand1" />
          <Image src={brand2} className="brand-logo" alt="brand2" />
          <Image src={brand3} className="brand-logo" alt="brand3" />
          <Image src={brand4} className="brand-logo" alt="brand4" />
          <Image src={brand5} className="brand-logo" alt="brand5" />
          <Image src={brand6} className="brand-logo" alt="brand6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
