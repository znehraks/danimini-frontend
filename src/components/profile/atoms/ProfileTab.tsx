import React from "react";
import { Tabs } from "antd";

export function ProfileTab() {
  return (
    <Tabs
      items={[
        { label: "일", key: "1", children: "일차일드" },
        { label: "이", key: "2", children: "이차일드" },
        { label: "삼", key: "3", children: "삼차일드" },
      ]}
    />
  );
}
