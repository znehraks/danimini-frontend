import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileInfoLayout = { children: ReactNode };
export function ProfileInfoLayout({ children }: TProfileInfoLayout) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  flex: 2,
  backgroundColor: "darkgreen",
  height: "9.375rem",
};
