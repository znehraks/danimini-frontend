import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardLayoutProps = { children: ReactNode };
export function FeedCardLayout({ children }: TFeedCardLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  width: "29.375rem",
  height: "auto",
  display: "flex",
  flexDirection: "column",
};
