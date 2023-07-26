import React from "react";
import { Tabs, TabsProps } from "antd";

export type TProfileTabProps = {} & TabsProps;
export function ProfileTab({ ...props }: TProfileTabProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tabs {...props} />;
}
