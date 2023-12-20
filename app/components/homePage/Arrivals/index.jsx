"use client";
import React from "react";
import Slider from "react-slick";
import Product from "@/app/components/ProductItems/Product";

import SampleNextArrow from "../../ProductItems/SampleNextArrow";
import SamplePrevArrow from "../../ProductItems/SamplePrevArrow";

const Arrivals = ({ products }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <div className="text-3xl font-semibold pb-6">New Arrivals</div>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="px-2" key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Arrivals;
