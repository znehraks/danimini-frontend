import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Box } from "@/components/@common/atoms/Box";
import { ProfileAtom } from "../atoms";
import { TProfileTab } from "../atoms/ProfileTab";
import { activeProfileTabAtom } from "@/recoilAtoms";
import { PROFILE_TAB } from "../../../../enums";

type TProfileNav = {} & TProfileTab;
export function ProfileNav({ items }: TProfileNav) {
  const [, setActiveProfileTab] = useRecoilState(activeProfileTabAtom);
  const onChange = useCallback(
    (e: string) => {
      setActiveProfileTab(e as PROFILE_TAB);
    },
    [setActiveProfileTab]
  );
  return (
    <Box style={style}>
      <ProfileAtom.Tab
        items={items}
        tabPosition="bottom"
        centered
        onChange={onChange}
      />
    </Box>
  );
}

const style: React.CSSProperties = {
  width: "100%",
};
