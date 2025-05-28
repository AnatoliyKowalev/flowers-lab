import React, { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-6xl leading-[4.5rem] font-lora">{children}</div>;
};

export default Title;
