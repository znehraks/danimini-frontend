import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TprofileNavProps = {
  children: ReactNode;
};
export function ProfileNav({ children }: TprofileNavProps) {
  return <Box>{children}</Box>;
}
