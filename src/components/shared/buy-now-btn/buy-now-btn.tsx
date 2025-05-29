import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BuyNowBtnProps } from "./interfaces";
import { cn } from "@/lib/utils";

const BuyNowBtn: FC<BuyNowBtnProps> = ({ className, size = "default" }) => {
  return (
    <Button size={size} asChild>
      <Link href="tel:+380934388466" className={cn("w-fit", className)}>
        Замовити
      </Link>
    </Button>
  );
};

export default BuyNowBtn;
