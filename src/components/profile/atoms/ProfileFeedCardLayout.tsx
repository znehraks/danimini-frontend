import React, { ReactNode } from "react";
import { Card as AntCard } from "antd";
import styled from "@emotion/styled";

type TProfileFeedCardLayoutProps = { children: ReactNode };

export function ProfileFeedCardLayout({
  children,
}: TProfileFeedCardLayoutProps) {
  return <Card>{children}</Card>;
}

const Card = styled(AntCard)`
  width: 15.625rem;
  height: 15.625rem;
  box-shadow: 1px 1px #ececec;
  padding: 0;
  .ant-card-body {
    padding: 0;
  }
`;
