import React from "react";
import styled from "@emotion/styled";
import moment from "moment";
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
      <AvatarBox>
        <img src={avatar} alt={`${email} 아바타`} />
      </AvatarBox>
      <IdBox>
        <div>
          <Typo.Content size={TYPO_SIZE.TINY}>
            {email} • <span>{moment().from(feedCreatedAt)}</span>
          </Typo.Content>
        </div>
        {/* <div>
          <Typo.Content size={TYPO_SIZE.TINY}>원본 오디오</Typo.Content>
        </div> */}
      </IdBox>
      <MoreButton>
        
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

const AvatarBox = styled.div`
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
`;
const IdBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    padding-bottom: 0.4rem;
  }
`;

const MoreButton = styled.div`
  margin-right: auto;
  width: 1.5rem;
  height: 1.5rem;
`;
