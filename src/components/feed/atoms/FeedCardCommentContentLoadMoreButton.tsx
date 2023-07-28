import React from "react";
import { ClickableSpan } from "@/components/@common/atoms/ClickableSpan";

type TFeedCardCommentContentLoadMoreButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};
export function FeedCardCommentContentLoadMoreButton({
  text,
  onClick,
}: TFeedCardCommentContentLoadMoreButtonProps) {
  return (
    <ClickableSpan onClick={onClick} style={style}>
      {text}
    </ClickableSpan>
  );
}

const style: React.CSSProperties = {
  color: "#a9a9a9",
  fontSize: "0.8rem",
  cursor: "pointer",
};
