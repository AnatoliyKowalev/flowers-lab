"use server";

import React, { FC } from "react";
import Bestsellers from "@/components/home-page/bestsellers";
import Features from "@/components/home-page/features";
import HowItWorks from "@/components/home-page/how-it-works";
import MainBanner from "@/components/home-page/main-banner";

const HomePage: FC = () => {
  return (
    <>
      <MainBanner />
      <Features />
      <HowItWorks />
      <Bestsellers />
    </>
  );
};

export default HomePage;
