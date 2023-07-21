/** @jsxImportSource @emotion/react */
/* eslint-disable react/jsx-props-no-spreading */
import { SerializedStyles } from "@emotion/react";
import { Button as AntdButton } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  style?: SerializedStyles;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & BaseButtonProps;

export function Button({ children, style, onClick, ...props }: TButtonProps) {
  return (
    <AntdButton onClick={onClick} css={style} {...props}>
      {children}
    </AntdButton>
  );
}
