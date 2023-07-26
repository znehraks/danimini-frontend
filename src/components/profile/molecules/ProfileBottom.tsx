import React from "react";
import { useRecoilState } from "recoil";
import { ProfileBottomLayout } from "../atoms/ProfileBottomLayout";
import { ProfileAtom } from "../atoms";
import { activeProfileTabAtom } from "@/recoilAtoms";
import { PROFILE_TAB } from "../../../../enums";
import { TProfileInfo } from "@/api";

type TProfileBottomProps = {
  data: TProfileInfo;
};

export function ProfileBottom({ data }: TProfileBottomProps) {
  const [activeProfileTab] = useRecoilState(activeProfileTabAtom);
  return (
    <ProfileBottomLayout>
      {activeProfileTab === PROFILE_TAB.POST && (
        <>
          {data.basicInfo.map((item) => (
            <ProfileAtom.FeedCard url={item.feed_thumb} />
          ))}
        </>
      )}
      {activeProfileTab === PROFILE_TAB.TODO && (
        <>
          {data.basicInfo.map((item) => (
            <ProfileAtom.TodoCard
              todoInfo={{
                title: item.todo_title,
                createdAt: item.todo_created_at,
                desc: item.todo_desc,
                id: item.todo_id,
                isFinished: item.todo_is_finished,
                point: item.todo_point,
                updatedAt: item.todo_updated_at,
              }}
            />
          ))}
        </>
      )}
    </ProfileBottomLayout>
  );
}
