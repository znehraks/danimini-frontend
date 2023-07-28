import React, { useMemo } from "react";
import { Box } from "@/components/@common/atoms/Box";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";

type TFeedCardCommentContentLineProps = {
  email: string;
  content: string;
  commentExpanded: boolean;
};
export function FeedCardCommentContentLine({
  email,
  content,
  commentExpanded,
}: TFeedCardCommentContentLineProps) {
  const contentFontStyle: React.CSSProperties = useMemo(() => {
    return {
      display: "inline-block",
      overflow: commentExpanded ? "visible" : "hidden",
      whiteSpace: commentExpanded ? "normal" : "nowrap",
      textOverflow: "ellipsis",
    };
  }, [commentExpanded]);
  return (
    <Box style={style}>
      <Typo.Title style={fontStyle} size={TYPO_SIZE.TINY}>
        {email}
      </Typo.Title>
      <Typo.Content style={contentFontStyle} size={TYPO_SIZE.TINY}>
        {content}
      </Typo.Content>
    </Box>
  );
}

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
};

const fontStyle: React.CSSProperties = {
  fontWeight: 800,
};
