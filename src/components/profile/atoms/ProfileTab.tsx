import React from "react";
import { Tabs, TabsProps } from "antd";

export type TProfileTab = {} & TabsProps;
export function ProfileTab({ ...props }: TProfileTab) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tabs {...props} />;
}
