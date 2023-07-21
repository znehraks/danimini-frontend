import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileBottomProps = {
  children: ReactNode;
};
export function ProfileBottom({ children }: TProfileBottomProps) {
  return <Box>{children}</Box>;
}
