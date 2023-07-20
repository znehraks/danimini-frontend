import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TAuthInputBoxProps = {
  children: ReactNode;
};

export function AuthInputBox({ children }: TAuthInputBoxProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  flex: "2",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  width: "90%",
};
