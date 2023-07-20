import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TAuthTitleBoxProps = {
  children: ReactNode;
};

export function AuthTitleBox({ children }: TAuthTitleBoxProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  flex: "1",
  padding: "2rem",
};
