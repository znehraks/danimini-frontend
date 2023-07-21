/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Layout({ children, style }: TLayoutProps) {
  return <Main style={style}>{children}</Main>;
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

/* height: calc(100vh - ${`${LAYOUT_HEADER_HEIGHT}rem`}); */
