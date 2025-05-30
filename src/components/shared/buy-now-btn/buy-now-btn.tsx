import React, { FC, PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BuyNowBtnProps } from "./interfaces";
import { cn } from "@/lib/utils";

const BuyNowBtn: FC<PropsWithChildren<BuyNowBtnProps>> = ({
  className,
  size = "default",
  children,
}) => {
  return (
    <Button size={size} asChild>
      <Link href="tel:+380934388466" className={cn("w-fit", className)}>
        {children ?? "Замовити"}
      </Link>
    </Button>
  );
};

export default BuyNowBtn;
