import React, { FC, PropsWithChildren } from "react";
import { TitleProps } from "./interfaces";
import { cn } from "@/lib/utils";

const Title: FC<PropsWithChildren<TitleProps>> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "text-5xl text-center leading-[4.5rem] font-lora",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Title;
