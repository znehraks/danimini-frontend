import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TAuthContentBoxProps = {
  children: ReactNode;
};

export function AuthContentBox({ children }: TAuthContentBoxProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  width: "21.875rem",
  height: "31.25rem",
  border: "1px solid #ececec",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
};
