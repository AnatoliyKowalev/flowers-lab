import Title from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="bg-[url('/img/main-banner.webp')] bg-cover bg-no-repeat bg-center h-[100vh] w-full flex items-center">
      <div className="container pb-40">
        <div className="ml-auto flex flex-col items-center w-fit text-center max-w-[600px]">
          <Title>Даруйте ніжність та емоції з букетами від Flower Lab</Title>
          <p className="mt-[3rem] mb-[5rem] ">
            Стильні букети з доставкою. Вишукані композиції для будь-якої події
            та настрою.
          </p>
          <Button size="lg" asChild>
            <Link href="#" className="w-fit px-[4rem]">
              Замовити
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
