import React from "react";
import { ProfileFeedCardLayout } from "./ProfileFeedCardLayout";
import { TProfileInfo } from "@/api";

type TProfileTodoCardProps = {
  todoInfo: {
    createdAt: TProfileInfo["todo_created_at"];
    desc: TProfileInfo["todo_desc"];
    id: TProfileInfo["todo_id"];
    isFinished: TProfileInfo["todo_is_finished"];
    point: TProfileInfo["todo_point"];
    title: TProfileInfo["todo_title"];
    updatedAt: TProfileInfo["todo_updated_at"];
  };
};

export function ProfileTodoCard({ todoInfo }: TProfileTodoCardProps) {
  return (
    <ProfileFeedCardLayout>
      <div>{todoInfo.title}</div>
      <div>{todoInfo.desc}</div>
      <div>{todoInfo.point}</div>
      <div>{todoInfo.isFinished}</div>
      <div>{todoInfo.createdAt}</div>
    </ProfileFeedCardLayout>
  );
}
