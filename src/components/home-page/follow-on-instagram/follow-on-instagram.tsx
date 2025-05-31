import Title from "@/components/shared/title";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const FollowOnInstagram: FC = () => {
  return (
    <section className="bg-[#e1eaf4] py-18">
      <div className="container grid grid-placement-center relative">
        <Title>Слідкуйте за нами в Instagram</Title>
        <div className="flex gap-6 mt-13">
          <Image
            src="/img/f-1.jpg"
            width={300}
            height={300}
            alt="Image 1"
            className="min-w-[79px] max-w-[236px] w-full h-fit"
          />
          <Image
            src="/img/f-3.jpg"
            width={300}
            height={200}
            alt="Image 2"
            className="ml-auto min-w-[76px] max-w-[233px] w-full h-fit"
          />
          <Image
            src="/img/f-2.jpg"
            width={500}
            height={600}
            alt="Image 3"
            className="min-w-[94px] max-w-[377px] w-full h-fit"
          />
        </div>
        <div className="flex gap-6 mt-6">
          <Image
            src="/img/f-4.jpg"
            width={300}
            height={300}
            alt="Image 4"
            className="min-w-[79px] max-w-[233px] w-full h-fit"
          />
          <Image
            src="/img/f-5.jpg"
            width={400}
            height={400}
            alt="Image 5"
            className="min-w-[98px] max-w-[332px] w-full h-fit"
          />
          <Image
            src="/img/f-6.jpg"
            width={600}
            height={700}
            alt="Image 6"
            className="ml-auto min-w-[63px] max-w-[182px] w-full h-fit"
          />
          <Image
            src="/img/f-7.jpg"
            width={200}
            height={200}
            alt="Image 7"
            className="hidden md:block max-w-[168px] w-full h-fit"
          />
        </div>
        <Link
          href="https://www.instagram.com/flowerlab_gatne"
          className="text-secondary text-2xl lg:text-4xl absolute -bottom-4 left-8 lg:top-1/2 lg:left-1/2 lg:-translate-x-2/3 lg:-translate-y-1/2 h-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          @flowerlab_gatne
        </Link>
      </div>
    </section>
  );
};

export default FollowOnInstagram;
