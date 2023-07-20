import React, { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { Button } from "@/components/@common/atoms/Button";

type TLoginButtonProps = {
  children: ReactNode;
  style?: SerializedStyles;
};
export function LoginButton({ children, style }: TLoginButtonProps) {
  return <Button css={style}>{children}</Button>;
}
