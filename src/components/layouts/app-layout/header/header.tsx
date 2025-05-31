import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import BuyNowBtn from "@/components/shared/buy-now-btn";

const PageHeader: FC = () => {
  return (
    <div className="gap-2 fixed top-0 left-0 w-full py-[13px] bg-white border-b border-foreground z-10">
      <div className="container flex items-center justify-between">
        <Link href="/" className="w-fit">
          <Image
            src="/img/logo.webp"
            width={200}
            height={100}
            className="object-contain max-w-[140px]"
            alt="логотип"
            loading="eager"
          />
        </Link>
        <BuyNowBtn className="px-[2rem]" />
      </div>
    </div>
  );
};

export default PageHeader;
