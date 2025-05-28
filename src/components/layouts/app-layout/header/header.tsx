import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PageHeader: FC = () => {
  return (
    <div className="gap-2 fixed top-0 left-0 w-full py-[13px] bg-white border-b border-foreground">
      <div className="container flex items-center justify-between">
        <Link href="/" className="w-fit">
          <Image
            src="/img/logo.webp"
            width={200}
            height={100}
            className="w-fit h-[40px]"
            alt="логотип"
            loading="eager"
          />
        </Link>
        <Button asChild>
          <Link href="#" className="w-fit px-[2rem]">
            Замовити
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
