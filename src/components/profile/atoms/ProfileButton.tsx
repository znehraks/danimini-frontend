import React from "react";
import { Button, TButtonProps } from "@/components/@common/atoms/Button";

type TProfileButtonProps = {} & TButtonProps;
export function ProfileButton({ children, onClick }: TProfileButtonProps) {
  return (
    <Button style={style} onClick={onClick}>
      {children}
    </Button>
  );
}

const style: React.CSSProperties = {};
