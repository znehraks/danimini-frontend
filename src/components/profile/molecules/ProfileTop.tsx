import React from "react";
import { ProfileAtom } from "../atoms";
import { ProfileAvatar } from "../atoms/ProfileAvatar";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";
import { TProfileInfo } from "@/api";

type TProfileTopProps = {
  data: TProfileInfo;
  userEmail: string;
};

export function ProfileTop({ data, userEmail }: TProfileTopProps) {
  return (
    <ProfileAtom.TopLayout>
      <ProfileAvatar
        url={data.basicInfo[0]?.user_avatar}
        size={{ width: 150, height: 150 }}
      />
      <ProfileAtom.InfoLayout>
        <ProfileAtom.TopRow>
          <Typo.Content size={TYPO_SIZE.MEDIUM}>{userEmail}</Typo.Content>
        </ProfileAtom.TopRow>
        <ProfileAtom.TopRow>
          <Typo.Content size={TYPO_SIZE.SMALL}>
            게시물 {data.feedCount}
          </Typo.Content>
          <Typo.Content size={TYPO_SIZE.SMALL}>
            할 일 {data.todoCount}
          </Typo.Content>
          <Typo.Content size={TYPO_SIZE.SMALL}>
            팔로워 {data.followerCount}
          </Typo.Content>
          <Typo.Content size={TYPO_SIZE.SMALL}>
            팔로잉 {data.followingCount}
          </Typo.Content>
        </ProfileAtom.TopRow>
        <ProfileAtom.TopRow>{data.basicInfo[0]?.user_desc}</ProfileAtom.TopRow>
      </ProfileAtom.InfoLayout>
    </ProfileAtom.TopLayout>
  );
}
