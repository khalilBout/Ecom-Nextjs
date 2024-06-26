import Banner from "./components/homePage/Banner";
import BannerBottom from "./components/homePage/BannerBottom";
import BestSellers from "./components/homePage/BestSellers";
import NewArrivals from "./components/homePage/NewArrivals";
import Sale from "./components/homePage/Sale";
import NewProducts from "./components/homePage/NewProducts";
import YearProduct from "./components/homePage/YearProduct";

import man from "@/public/images/banner/man3.png";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />

        {/* <YearProduct /> */}
        <NewProducts />
      </div>
    </>
  );
}
