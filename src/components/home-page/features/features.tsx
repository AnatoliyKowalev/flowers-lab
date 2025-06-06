import Image from "next/image";
import React, { FC } from "react";
import { FEATURES } from "./constants";
import BlockTitle from "@/components/shared/block-title";

const Features: FC = () => {
  return (
    <div className="container pt-20 pb-40">
      <div className="flex flex-col items-center gap-14 text-center">
        <BlockTitle className="lg:max-w-[80%]">
          Ніжність природи — у кожному букеті. Обираємо з любов’ю, оформлюємо з
          душею.
        </BlockTitle>
        <div className="grid lg:flex lg:items-center gap-20">
          {FEATURES.map(({ icon, text, desc }) => (
            <div key={text} className="flex flex-col items-center gap-3">
              <Image src={icon} width={84} height={84} alt={text} />
              <div className="text-lg font-semibold text-center">{text}</div>
              <div className="text-[1rem] max-w-[260px] text-secondary">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
