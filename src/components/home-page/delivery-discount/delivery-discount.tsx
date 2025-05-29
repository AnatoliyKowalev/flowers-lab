import React, { FC } from "react";
import BuyNowBtn from "@/components/shared/buy-now-btn";
import Title from "@/components/shared/title";

const DeliveryDiscount: FC = () => {
  return (
    <div className="bg-[url('/img/delivery-discount-bg.webp')] bg-cover bg-no-repeat bg-center h-[70vh] w-full flex py-10">
      <div className="container !mt-auto flex flex-col items-center gap-8">
        <Title className="max-w-[80%]">
          Замовляйте зараз і отримайте знижку 15% на доставку
        </Title>
        <BuyNowBtn className="px-[4rem]" size="lg" />
      </div>
    </div>
  );
};

export default DeliveryDiscount;
