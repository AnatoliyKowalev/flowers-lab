"use server";

import React, { FC } from "react";
import Bestsellers from "@/components/home-page/bestsellers";
import Features from "@/components/home-page/features";
import HowItWorks from "@/components/home-page/how-it-works";
import MainBanner from "@/components/home-page/main-banner";
import DeliveryDiscount from "@/components/home-page/delivery-discount";

const HomePage: FC = () => {
  return (
    <>
      <MainBanner />
      <Features />
      <HowItWorks />
      <Bestsellers />
      <DeliveryDiscount />
    </>
  );
};

export default HomePage;
