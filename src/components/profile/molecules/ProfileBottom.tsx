import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { ProfileBottomLayout } from "../atoms/ProfileBottomLayout";
import { ProfileAtom } from "../atoms";
import { getProfileInfo } from "@/api";
import { activeProfileTabAtom } from "@/recoilAtoms";
import { PROFILE_TAB } from "../../../../enums";

export function ProfileBottom() {
  const [activeProfileTab] = useRecoilState(activeProfileTabAtom);
  const { data, isError, error, isLoading } = useQuery(["me"], getProfileInfo, {
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: true,
    retryDelay: 3000,
  });

  console.log(data);

  if (!data) return null;
  if (isLoading) return null;
  if (isError) return null;
  if (error) return null;
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
