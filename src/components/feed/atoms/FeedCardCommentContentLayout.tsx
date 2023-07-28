import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardCommentContentLayoutProps = { children: ReactNode };
export function FeedCardCommentContentLayout({
  children,
}: TFeedCardCommentContentLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {
  minHeight: "3rem",
  borderBottom: "1px solid #ececec",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};
