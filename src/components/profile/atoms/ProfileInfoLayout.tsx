import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileInfoLayout = { children: ReactNode };
export function ProfileInfoLayout({ children }: TProfileInfoLayout) {
  return <Box>{children}</Box>;
}
