/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import { Button } from "@/components/@common/atoms/Button";

type TAuthButtonProps = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
export function AuthButton({ children, onClick }: TAuthButtonProps) {
  return (
    <Button onClick={onClick} type="primary" css={style}>
      {children}
    </Button>
  );
}
const style = css``;
