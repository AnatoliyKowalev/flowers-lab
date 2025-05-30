import BuyNowBtn from "@/components/shared/buy-now-btn";
import Title from "@/components/shared/title";
import React, { FC } from "react";

const ContactUs: FC = () => {
  return (
    <section className="pt-35 pb-25 line-up">
      <div className="container grid place-items-center gap-8">
        <Title className="text-5xl max-w-[60%]">
          Зв'яжіться з нами, якщо у вас виникнуть запитання
        </Title>
        <BuyNowBtn className="px-[4rem]" size="lg">
          Подзвонити
        </BuyNowBtn>
      </div>
    </section>
  );
};

export default ContactUs;
