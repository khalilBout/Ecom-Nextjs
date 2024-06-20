import React from "react";
import Link from "next/link";
import Image from "next/image";

import { sale1 } from "@/public/images/index";
import { sale2 } from "@/public/images/index";
import { sale3 } from "@/public/images/index";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link href="/shop">
          <Image
            className="h-full w-full object-cover"
            src={sale1}
            alt="saleImgOne"
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image
              className="h-full w-full object-cover"
              src={sale2}
              alt="saleImgTwo"
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image
              className="h-full w-full object-cover"
              src={sale3}
              alt="saleImgThree"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
