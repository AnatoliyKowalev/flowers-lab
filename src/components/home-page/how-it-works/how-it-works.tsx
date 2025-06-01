import BlockTitle from "@/components/shared/block-title";
import Title from "@/components/shared/title";
import Image from "next/image";
import React, { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <section className="bg-[#e1eaf4] pt-35 pb-10 lg:py-35 line-up">
      <div className="container">
        <div className="flex flex-col gap-6 lg:max-w-[75%] mx-auto text-center">
          <Title>
            Від букетів ручної роботи до пишних квіткових композицій
          </Title>
          <p>
            У Flower Lab ми переконані: квіти можуть сказати більше, ніж слова.
            Наш сервіс створений для того, щоб допомогти вам передати емоції —
            любов, вдячність, співчуття чи радість — за допомогою ідеально
            підібраної квіткової композиції. Це може бути романтичний жест,
            привітання з днем народження або просто бажання подарувати комусь
            хороший настрій — наші букети зроблять кожну мить особливою.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:mt-30 relative">
          <div className="h-[50vh] relative lg:static lg:position-[unset] lg:h-fit lg:col-span-1 lg:z-1">
            <Image
              src="/img/how-works-3.webp"
              width={700}
              height={500}
              className="w-[90%] lg:w-[60%] absolute bottom-[1rem] lg:bottom-[-5rem] right-0 lg:right-auto lg:left-0 shadow-xl"
              alt="квіти на столі"
            />
            <Image
              src="/img/how-works-2.webp"
              width={300}
              height={300}
              className="w-[50%] lg:w-[272px] absolute top-[4rem] lg:top-[-4rem] left-[40%] lg:left-[13rem] shadow-xl"
              alt="магазин"
            />
            <Image
              src="/img/how-works-1.webp"
              width={400}
              height={500}
              className="w-[50%] lg:w-[310px] absolute bottom-12 lg:bottom-[-2rem] left-0 lg:left-[-4rem] shadow-xl"
              alt="букет квітів"
            />
          </div>
          <div className="lg:col-span-1 flex flex-col bg-white px-4 -mx-4 lg:px-15 py-14 lg:z-2 shadow-xl">
            <BlockTitle>Як ми працюємо</BlockTitle>
            <div className="text-secondary py-8">
              Даємо клієнтам відчути турботу в кожному кроці — від вибору букета
              до моменту вручення.
            </div>
            <ul className="flex flex-col gap-6">
              <li>
                ❉ Оберіть улюблений букет або створіть індивідуальну композицію,
                що відповідає нагоді та настрою.
              </li>
              <li>
                ❉ Оформіть замовлення за кілька кліків — вкажіть деталі
                доставки, побажання, оберіть зручний час.
              </li>
              <li>
                ❉ Ми створюємо букет з любов’ю та доставляємо його вчасно,
                гарантуючи свіжість і вау-ефект для отримувача.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
