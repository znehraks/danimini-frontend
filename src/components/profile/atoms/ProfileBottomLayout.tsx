import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TProfileBottomLayoutProps = { children: ReactNode };
export function ProfileBottomLayout({ children }: TProfileBottomLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  placeItems: "center",
  gap: "0.2rem",
};
