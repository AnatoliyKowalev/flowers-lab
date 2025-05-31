import React, { FC } from "react";
import Title from "@/components/shared/title";
import { YEAR } from "@/lib/constants";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-foreground text-white pt-18 pb-16 lg:pb-10">
      <div className="container grid place-items-center gap-15">
        <Title className="mx-auto">FlowerLab</Title>
        <div className="flex items-center justify-between w-full relative">
          <Link href="/privacy-policy">Privacy policy</Link>
          <span className="absolute left-0 -bottom-10 lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2">{`© ${YEAR} Copyright`}</span>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
