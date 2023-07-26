import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardUtilLayoutProps = { children: ReactNode };
export function FeedCardUtilLayout({ children }: TFeedCardUtilLayoutProps) {
  return <Box style={style}>{children}</Box>;
}

const style: React.CSSProperties = {};
