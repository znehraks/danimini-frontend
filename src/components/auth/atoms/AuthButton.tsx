/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import { Button } from "@/components/@common/atoms/Button";

type TAuthButtonProps = {
  children: ReactNode;
};
export function AuthButton({ children }: TAuthButtonProps) {
  return (
    <Button type="primary" css={style}>
      {children}
    </Button>
  );
}
const style = css``;
