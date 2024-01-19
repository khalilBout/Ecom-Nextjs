import React from "react";
import SpecialOffers from "@/app/components/homePage/NewProducts";
import Breadcrumbs from "@/app/components/pageProps/Breadcrumbs";

const Offer = () => {
  //   const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      {/* <Breadcrumbs title="Offer" prevLocation="" /> */}
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;
