/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";

type TBoxProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Box({ children, style }: TBoxProps) {
  return <div style={style}>{children}</div>;
}

/* height: calc(100vh - ${`${LAYOUT_HEADER_HEIGHT}rem`}); */
