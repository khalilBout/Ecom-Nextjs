"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
// import { man } from "@/public/images/banner/man3.png";

// images
// import { bannerImgOne } from "@/public/images/index";
// import { bannerImgTwo } from "@/public/images/index";
// import { bannerImgThree } from "@/public/images/index";

import { CatyOne } from "@/public/images/index";
import { CatyTow } from "@/public/images/index";
import { CatyThere } from "@/public/images/index";

import chld from "@/public/images/banner/woman.png";
import woman from "@/public/images/banner/woman.png";

import Link from "next/link";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <Link
          href="/shop?category=man"
          className="bg-gradient-to-r from-violet-500/5 to-fuchsia-500/20"
        >
          <div className="px-[36px] sml:px-[84px] mdl:px-[120px] lg:px-[160px] h-[360px] w-full flex justify-between items-center gap-4">
            {/* text side  */}
            <div className="max-mdl:bg-[url('/images/banner/man3.png')] max-mdl:bg-cover max-mdl:bg-right-top w-full h-full mdl:w-2/5 flex flex-col justify-center gap-4">
              <h1 className="text-2xl sml:text-3xl mdl:text-4xl font-mono text-gray-950 ">
                Men's Fashion
              </h1>
              <p className=" bg-gradient-to-r from-gray-200/5 to-gray-200/10 text-[14px] max-w-[360px] text-gray-900 px-2 py-1 rounded-2xl">
                Discover fresh, stylish looks with our exclusive summer sale.
                Enjoy up to 50% off on select men's clothing. Upgrade your
                wardrobe today!
              </p>
              <button className="py-1 rounded-full bg-black max-w-[180px] text-white font-semibold cursor-pointer text-[14px]">
                {/* <Link href="/shop" className="px-4 py-2"> */}
                Shoping Now
                {/* </Link> */}
              </button>
            </div>
            <div className=" hidden mdl:flex w-3/5 h-full  justify-center items-center">
              <Image
                src={CatyOne}
                alt="bannerImgTwo"
                width={500}
                height={500}
                quality={100}
                // sizes="max-width: 480px"
                // fill={true}
              />
            </div>
            {/* <img src= alt="aa" className="w-16 h-16" /> */}
          </div>
        </Link>

        <Link
          href="/shop?category=woman"
          className="bg-gradient-to-r from-violet-500/5 to-fuchsia-500/20"
        >
          <div className="px-[36px] sml:px-[84px] mdl:px-[120px] lg:px-[160px] h-[360px] w-full flex justify-between items-center gap-4">
            {/* text side  */}
            <div className="max-mdl:bg-[url('/images/banner/man3.png')] max-mdl:bg-cover max-mdl:bg-right-top w-full h-full mdl:w-2/5 flex flex-col justify-center gap-4">
              <h1 className="text-2xl sml:text-3xl mdl:text-4xl font-mono text-gray-950 ">
                Women's Fashion Sale
              </h1>
              <p className=" bg-gradient-to-r from-gray-200/5 to-gray-200/10 text-[14px] max-w-[360px] text-gray-900 px-2 py-1 rounded-2xl">
                Revamp your summer wardrobe with our chic collection. Enjoy up
                to 50% off on select women's clothing. Shop the latest trends
                now!
              </p>
              <button className="py-1 rounded-full bg-black max-w-[180px] text-white font-semibold cursor-pointer text-[14px]">
                {/* <Link href="/shop" className="px-4 py-2"> */}
                Shoping Now
                {/* </Link> */}
              </button>
            </div>
            <div className=" hidden mdl:flex w-3/5 h-full  justify-center items-center">
              <Image
                src={CatyTow}
                alt="bannerImgTwo"
                width={500}
                height={500}
                quality={100}
                // sizes="max-width: 480px"
                // fill={true}
              />
            </div>
            {/* <img src= alt="aa" className="w-16 h-16" /> */}
          </div>
        </Link>

        <Link
          href="/shop?category=children"
          className="bg-gradient-to-r from-violet-500/5 to-fuchsia-500/20"
        >
          <div className="px-[36px] sml:px-[84px] mdl:px-[120px] lg:px-[160px] h-[360px] w-full flex justify-between items-center gap-4">
            {/* text side  */}
            <div className="max-mdl:bg-[url('/images/banner/man3.png')] max-mdl:bg-cover max-mdl:bg-right-top w-full h-full mdl:w-2/5 flex flex-col justify-center gap-4">
              <h1 className="text-2xl sml:text-3xl mdl:text-4xl font-mono text-gray-950 ">
                Kids' Summer Sale
              </h1>
              <p className=" bg-gradient-to-r from-gray-200/5 to-gray-200/10 text-[14px] max-w-[360px] text-gray-900 px-2 py-1 rounded-2xl">
                Brighten up your child's wardrobe with our summer collection.
                Enjoy up to 50% off on select children's clothing. Shop playful
                styles today!
              </p>
              <button className="py-1 rounded-full bg-black max-w-[180px] text-white font-semibold cursor-pointer text-[14px]">
                {/* <Link href="/shop" className="px-4 py-2"> */}
                Shoping Now
                {/* </Link> */}
              </button>
            </div>
            <div className=" hidden mdl:flex w-3/5 h-full  justify-center items-center">
              <Image
                src={CatyThere}
                alt="bannerImgTwo"
                width={500}
                height={500}
                quality={100}
                // sizes="max-width: 480px"
                // fill={true}
              />
            </div>
            {/* <img src= alt="aa" className="w-16 h-16" /> */}
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;

// <Link href="/shop">
// <div>
//   <Image src={bannerImgTwo} alt="bannerImgTwo" />
// </div>
// </Link>
// <Link href="/shop">
// <div>
//   <Image src={bannerImgThree} alt="bannerImgThree" />
// </div>
// </Link>
