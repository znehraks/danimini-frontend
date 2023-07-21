/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, TButtonProps } from "@/components/@common/atoms/Button";

type TAuthButtonProps = {} & TButtonProps;
export function AuthButton({ children, onClick }: TAuthButtonProps) {
  return (
    <Button onClick={onClick} type="primary" style={style}>
      {children}
    </Button>
  );
}
const style: React.CSSProperties = {};
