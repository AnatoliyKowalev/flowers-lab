import React, { FC } from "react";
import Title from "@/components/shared/title";
import { BEST_FLOWERS } from "./constants";
import Image from "next/image";
import BuyNowBtn from "@/components/shared/buy-now-btn";

const Bestsellers: FC = () => {
  return (
    <section className="container py-35 flex flex-col">
      <Title>Наші бестселери</Title>
      <div className="mt-15 grid gap-4 overflow-x-auto sm:grid-cols-4 grid-flow-col auto-cols-[minmax(90%,_1fr)] md:auto-cols-auto md:grid-flow-row md:overflow-x-visible md:grid-cols-12 snap-x snap-mandatory scroll-smooth">
        {BEST_FLOWERS.map(({ name, img, id }, idx) => (
          <div
            className="snap-start w-full max-w-md flex flex-col gap-2 col-span-1 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit"
            key={id}
          >
            <Image src={img} width={400} height={500} alt="приклад букету" />
            <div className="text-lg">{name}</div>
          </div>
        ))}
      </div>
      <BuyNowBtn className="px-[4rem] mt-15 !mx-auto" size="lg" />
    </section>
  );
};

export default Bestsellers;
