import React, { ReactNode } from "react";
import { Box } from "@/components/@common/atoms/Box";

type TFeedCardCommentContentProps = {
  children: ReactNode;
};
export function FeedCardCommentContent({
  children,
}: TFeedCardCommentContentProps) {
  return <Box>{children}</Box>;
}
