import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileTopLayout = { children: ReactNode };
export function ProfileTopLayout({ children }: TProfileTopLayout) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
};
