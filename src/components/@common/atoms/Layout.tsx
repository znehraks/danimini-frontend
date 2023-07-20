/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
  style?: SerializedStyles;
};

export function Layout({ children, style }: TLayoutProps) {
  return <Main css={style}>{children}</Main>;
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

/* height: calc(100vh - ${`${LAYOUT_HEADER_HEIGHT}rem`}); */
