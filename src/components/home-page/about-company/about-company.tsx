import BlockTitle from "@/components/shared/block-title";
import Image from "next/image";
import React, { FC } from "react";

const AboutCompany: FC = () => {
  return (
    <section className="pt-20 pb-50 bg-[#F5F1ED]">
      <div className="container flex flex-col gap-23">
        <div className="h-[554px] relative flex items-center">
          <Image
            src="/img/who-we-are.webp"
            width={800}
            height={600}
            className="absolute h-full w-[60%]"
            alt="квітковий фон"
          />
          <div className="my-8 bg-white z-1 w-[50%] px-16 py-20 ml-auto">
            <BlockTitle>Про нас</BlockTitle>
            <p className="pt-8 pb-13 text-secondary">
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
        <div className="h-[554px] relative flex items-center">
          <Image
            src="/img/what-we-do.webp"
            width={800}
            height={600}
            className="absolute right-0 h-full w-[60%]"
            alt="квітковий фон"
          />
          <div className="my-8 bg-white z-1 w-[50%] px-16 py-20">
            <BlockTitle>Що ми робимо</BlockTitle>
            <p className="pt-8 pb-13 text-secondary">
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
