import React, { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { Layout } from "@/components/@common/atoms/Layout";

type TInputBoxProps = {
  children: ReactNode;
  style?: SerializedStyles;
};

export function LoginInputBox({ children, style }: TInputBoxProps) {
  return <Layout css={style}>{children}</Layout>;
}
