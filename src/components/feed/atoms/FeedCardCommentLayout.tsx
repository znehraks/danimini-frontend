import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardCommentLayoutProps = { children: ReactNode };
export function FeedCardCommentLayout({
  children,
}: TFeedCardCommentLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {};
