"use server";

import Features from "@/components/home-page/features";
import MainBanner from "@/components/home-page/main-banner";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <MainBanner />
      <Features />
    </>
  );
};

export default HomePage;
