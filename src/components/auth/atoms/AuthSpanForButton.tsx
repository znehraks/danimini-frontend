import React from "react";
import { ClickableSpan } from "@/components/@common/atoms/ClickableSpan";

type TAuthSpanForButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export function AuthSpanForButton({
  children,
  onClick,
}: TAuthSpanForButtonProps) {
  return (
    <ClickableSpan onClick={onClick} style={style}>
      {children}
    </ClickableSpan>
  );
}
const style: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#3ea4e8",
  fontWeight: 600,
  cursor: "pointer",
};
