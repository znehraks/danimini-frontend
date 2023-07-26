import React from "react";
import styled from "@emotion/styled";
import { Box } from "@/components/@common/atoms/Box";

export function ProfileDetailModalContent() {
  return (
    <Box style={style}>
      <TitleBox />
      <CommentBox>내용</CommentBox>
    </Box>
  );
}

const style: React.CSSProperties = {
  minWidth: "fit-content",
  flex: 1,
  padding: "0 1rem",
};

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
