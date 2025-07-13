import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";


import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero/>
      <LeftSection 
        imageURL="media/mint.jpg"
        productName="Mint"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Mint experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
      <RightSection
        imageURL="media/Core.jpg"
        productName="Core"
        productDescription="The central dashboard for your TradX account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/pebble.png"
        productName="Pebble"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Mint Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="LearnX mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the TradX.tech
        blog.
      </p>
      <Footer />
    </>
  );
}

export default ProductsPage;