import React from "react";
import { Box } from "@/components/@common/atoms/Box";
import { ProfileAtom } from "../atoms";
import { TProfileTab } from "../atoms/ProfileTab";

type TProfileNav = {} & TProfileTab;
export function ProfileNav({ items }: TProfileNav) {
  return (
    <Box style={style}>
      <ProfileAtom.Tab items={items} tabPosition="bottom" centered />
    </Box>
  );
}

const style: React.CSSProperties = {
  width: "100%",
};
