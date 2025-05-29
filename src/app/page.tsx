"use server";

import Features from "@/components/home-page/features";
import HowItWorks from "@/components/home-page/how-it-works";
import MainBanner from "@/components/home-page/main-banner";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <MainBanner />
      <Features />
      <HowItWorks />
    </>
  );
};

export default HomePage;
