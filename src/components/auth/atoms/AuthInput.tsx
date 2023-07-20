/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */
import React from "react";
import { Input as AntdInput, InputProps } from "antd";

type TAuthInputProps = {} & InputProps;
export function AuthInput({ ...props }: TAuthInputProps) {
  return <AntdInput {...props} style={style} />;
}
const style: React.CSSProperties = { height: "2.5rem" };
