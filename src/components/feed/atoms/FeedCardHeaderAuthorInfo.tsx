import React from "react";
import styled from "@emotion/styled";
import moment from "moment";
import { MoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Box } from "@/components/@common/atoms/Box";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";

type TFeedCardHeaderAuthorInfoProps = {
  email: string;
  avatar: string;
  feedCreatedAt: string;
};
export function FeedCardHeaderAuthorInfo({
  email,
  avatar,
  feedCreatedAt,
}: TFeedCardHeaderAuthorInfoProps) {
  return (
    <Box style={layoutStyle}>
      <AvatarBox href={`/profile/${email}`}>
        <img src={avatar} alt={`${email} 아바타`} />
      </AvatarBox>
      <IdBox>
        <div>
          <Typo.Content size={TYPO_SIZE.TINY}>
            {email} • <span>{moment().from(feedCreatedAt)}</span>
          </Typo.Content>
        </div>
      </IdBox>
      <MoreButton>
        <MoreOutlined style={{ transform: "rotate(90deg)" }} />
      </MoreButton>
    </Box>
  );
}

const layoutStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const AvatarBox = styled(Link)`
  width: 2.625rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
  margin-right: 0.5rem;
`;
const IdBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    padding-bottom: 0.2rem;
    span {
      font-weight: 800;
    }
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  margin-right: auto;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
`;
