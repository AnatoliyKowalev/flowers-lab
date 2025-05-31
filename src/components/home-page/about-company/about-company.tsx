import BlockTitle from "@/components/shared/block-title";
import Image from "next/image";
import React, { FC } from "react";

const AboutCompany: FC = () => {
  return (
    <section className="pt-14 lg:pt-20 pb-30 lg:pb-50 bg-[#F5F1ED]">
      <div className="container flex flex-col gap-10 lg:gap-23">
        <div className="lg:h-[554px] relative grid lg:flex lg:items-center">
          <Image
            src="/img/who-we-are.webp"
            width={800}
            height={600}
            className="lg:absolute h-full lg:w-[60%]"
            alt="квітковий фон"
          />
          <div className="-mx-4 lg:mx-0 my-8 bg-white z-1 lg:w-[50%] px-4 lg:px-16 py-10 lg:py-20 lg:ml-auto">
            <BlockTitle>Про нас</BlockTitle>
            <p className="pt-5 lg:pt-8 pb-8 lg:pb-13 text-secondary">
              У FlowerLab ми створюємо не просто букети — ми даруємо емоції.
              Наші доброзичливі флористи з любов’ю складають композиції зі
              свіжих квітів, щоб кожен букет був унікальним і наповненим теплом.
              Ми віримо, що краса у деталях — тому поруч із квітами пропонуємо
              повітряні кульки, стильні листівки й навіть маленькі тістечка, які
              зроблять момент ще більш особливим.
            </p>
            <div>Ми не просто обіцяємо — ми надихаємо</div>
          </div>
        </div>
        <div className="lg:h-[554px] relative grid lg:flex lg:items-center">
          <Image
            src="/img/what-we-do.webp"
            width={800}
            height={600}
            className="lg:absolute right-0 h-full lg:w-[60%]"
            alt="квітковий фон"
          />
          <div className="-mx-4 lg:mx-0 my-8 bg-white z-1 lg:w-[50%] px-4 lg:px-16 py-10 lg:py-20 lg:mr-auto">
            <BlockTitle>Що ми робимо</BlockTitle>
            <p className="pt-5 lg:pt-8 pb-8 lg:pb-13 text-secondary">
              Ми дбаємо про кожного клієнта, ніби даруємо квіти близькій людині.
              Замовити у нас легко, а отримати — приємно. FlowerLab — це про
              турботу, натхнення та справжні враження, які залишаються у серці
              надовго.
            </p>
            <div>Ми не просто обіцяємо — ми надихаємо</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
