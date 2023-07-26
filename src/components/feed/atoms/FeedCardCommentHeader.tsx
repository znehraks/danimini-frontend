import React from "react";
import {
  HeartOutlined,
  MessageOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export function FeedCardCommentHeader() {
  return (
    <ButtonDiv>
      <HeartOutlined />
      <MessageOutlined />
      <SaveOutlined />
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  span {
    height: 100%;
    svg {
      height: 100%;
      width: 1.5rem;
    }
    :last-child {
      margin-left: auto;
    }
  }
`;
