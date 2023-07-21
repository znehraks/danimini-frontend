/** @jsxImportSource @emotion/react */
/* eslint-disable react/jsx-props-no-spreading */
import { Button as AntdButton } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import React, { ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & BaseButtonProps;

export function Button({ children, style, onClick, ...props }: TButtonProps) {
  return (
    <AntdButton onClick={onClick} style={style} {...props}>
      {children}
    </AntdButton>
  );
}
