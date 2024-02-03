"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

// images
import { bannerImgOne } from "@/public/images/index";
import { bannerImgTwo } from "@/public/images/index";
import { bannerImgThree } from "@/public/images/index";
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
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link href="/shop">
          <div>
            <Image src={bannerImgOne} alt="bannerImgOne" />
          </div>
        </Link>
        <Link href="/shop">
          <div>
            <Image src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
        </Link>
        <Link href="/shop">
          <div>
            <Image src={bannerImgThree} alt="bannerImgThree" />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;

// banner with scc
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// const Banner = () => {

// const slides = [
//   {
//     url: bannerImgOne,
//     //  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
//   },
//   {
//     url: bannerImgTwo,
//     //  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
//   },
//   {
//     url: bannerImgThree,
//     //  "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//   },
// ];

// const [currentIndex, setCurrentIndex] = useState(0);

// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//   setCurrentIndex(newIndex);
// };

// const nextSlide = () => {
//   const isLastSlide = currentIndex === slides.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };

// const goToSlide = (slideIndex) => {
//   setCurrentIndex(slideIndex);
// };
// <div className="max-w-[1400px] h-[420px] w-full relative group">
//       <Image
//         src={slides[currentIndex].url}
//         // style={{
//         //   backgroundImage: `url(${slides[currentIndex].url})`,
//         // }}
//         className="w-full h-full  bg-center bg-cover duration-500 relative object-none object-center"
//       ></Image>

//       {/* Left Arrow */}
//       <div className="absolute top-0 right-0 w-full h-full">
//         <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <BsChevronCompactLeft onClick={prevSlide} size={30} />
//         </div>
//         {/* Right Arrow */}
//         <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <BsChevronCompactRight onClick={nextSlide} size={30} />
//         </div>
//       </div>
//     </div>
