import React, { FC, PropsWithChildren } from "react";
import { BlockTitleProps } from "./interfaces";
import { cn } from "@/lib/utils";

const BlockTitle: FC<PropsWithChildren<BlockTitleProps>> = ({
  className,
  children,
}) => {
  return <div className={cn("text-4xl", className)}>{children}</div>;
};

export default BlockTitle;
