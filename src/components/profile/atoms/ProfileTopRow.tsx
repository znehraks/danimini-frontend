import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileTopRow = { children: ReactNode };
export function ProfileTopRow({ children }: TProfileTopRow) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2rem",
};
