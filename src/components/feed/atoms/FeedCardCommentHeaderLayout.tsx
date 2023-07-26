import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardCommentHeaderLayoutProps = { children: ReactNode };
export function FeedCardCommentHeaderLayout({
  children,
}: TFeedCardCommentHeaderLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  height: "2.875rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "0.625rem",
};
