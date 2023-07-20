/** @jsxImportSource @emotion/react */
/* eslint-disable react/jsx-props-no-spreading */
import { SerializedStyles } from "@emotion/react";
import { Button as AntdButton } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  style?: SerializedStyles;
} & BaseButtonProps;

export function Button({ children, style, ...props }: TButtonProps) {
  return (
    <AntdButton css={style} {...props}>
      {children}
    </AntdButton>
  );
}
