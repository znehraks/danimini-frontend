/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TBoxProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export function Box({ children, style, className }: TBoxProps) {
  return (
    <Div style={style} className={className}>
      {children}
    </Div>
  );
}

const Div = styled.div`
  .img-box {
    position: relative !important;
    object-fit: contain !important;
  }
`;
/* height: calc(100vh - ${`${LAYOUT_HEADER_HEIGHT}rem`}); */
