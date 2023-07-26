import React from "react";
import { ProfileFeedCardLayout } from "./ProfileFeedCardLayout";
import { TRawProfileInfo } from "@/api";

type TProfileTodoCardProps = {
  todoInfo: {
    createdAt: TRawProfileInfo["todo_created_at"];
    desc: TRawProfileInfo["todo_desc"];
    id: TRawProfileInfo["todo_id"];
    isFinished: TRawProfileInfo["todo_is_finished"];
    point: TRawProfileInfo["todo_point"];
    title: TRawProfileInfo["todo_title"];
    updatedAt: TRawProfileInfo["todo_updated_at"];
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
