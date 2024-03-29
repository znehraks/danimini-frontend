import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileInfoLayoutProps = { children: ReactNode };
export function ProfileInfoLayout({ children }: TProfileInfoLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  flex: 2,
  height: "9.375rem",
  display: "flex",
  flexDirection: "column",
};
