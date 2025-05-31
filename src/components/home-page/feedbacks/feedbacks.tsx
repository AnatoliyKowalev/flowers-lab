import React, { FC } from "react";
import Image from "next/image";
import BlockTitle from "@/components/shared/block-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FEEDBACKS } from "./constants";

const Feedbacks: FC = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-15">
        <BlockTitle className="text-center">
          Що говорять про нас наші клієнти
        </BlockTitle>
        <Carousel className="mx-auto w-full max-w-5xl">
          <CarouselContent>
            {FEEDBACKS.map(({ img, customerName, text }, index) => (
              <CarouselItem
                className="pl-6 lg:basis-1/3 lg:amax-w-[320px] group"
                tabIndex={0}
                key={index}
              >
                <div className="relative overflow-hidden">
                  <div className="flex flex-col gap-3 pointer-events-none">
                    <Image
                      src={img}
                      width={400}
                      height={400}
                      className="w-full h-[360px] object-cover"
                      alt="відгук замовлення"
                    />
                    <div className="text-xl">{customerName}</div>
                    <div className="text-md">✦ ✦ ✦ ✦ ✦</div>
                    <div className="text-secondary leading-[1.7rem] line-clamp-3 transition-all duration-300">
                      {text}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/80 lg:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-6 text-white flex items-center justify-center text-center transition-opacity duration-300 pointer-events-none">
                    <p className="max-w-md">{text}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </div>
    </section>
  );
};

export default Feedbacks;
