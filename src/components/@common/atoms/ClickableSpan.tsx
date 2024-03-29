import styled from "@emotion/styled";
import React from "react";

type TClickableSpanProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  style: React.CSSProperties;
};
export function ClickableSpan({
  children,
  onClick,
  style,
}: TClickableSpanProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Span role="button" tabIndex={0} onClick={onClick} style={style}>
      {children}
    </Span>
  );
}

const Span = styled.span``;
