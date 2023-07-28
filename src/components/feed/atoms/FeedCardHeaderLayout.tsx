import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardHeaderLayoutProps = { children: ReactNode };
export function FeedCardHeaderLayout({ children }: TFeedCardHeaderLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  height: "2.875rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "0.3rem",
};
