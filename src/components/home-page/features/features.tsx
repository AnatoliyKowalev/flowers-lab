import Image from "next/image";
import React, { FC } from "react";
import { FEATURES } from "./constants";

const Features: FC = () => {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center gap-14 text-center">
        <h2 className="text-4xl max-w-[80%]">
          Ніжність природи — у кожному букеті. Обираємо з любов’ю, оформлюємо з
          душею.
        </h2>
        <div className="flex items-center gap-20">
          {FEATURES.map(({ icon, text }) => (
            <div key={text} className="flex flex-col items-center gap-3">
              <Image src={icon} width={84} height={84} alt={text} />
              <div className="text-lg font-semibold text-center">{text}</div>
              <div className="text-[1rem] max-w-[260px] text-secondary">
                Short text describing one of your product or service features.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
