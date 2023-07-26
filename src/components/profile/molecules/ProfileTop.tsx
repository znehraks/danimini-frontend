import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { ProfileAtom } from "../atoms";
import { ProfileAvatar } from "../atoms/ProfileAvatar";
import { getProfileInfo } from "@/api";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";
import { userEmailAtom } from "@/recoilAtoms";

export function ProfileTop() {
  const [userEmail] = useRecoilState(userEmailAtom);
  const { data, isError, error, isLoading } = useQuery(["me"], getProfileInfo, {
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: true,
    retryDelay: 3000,
  });

  if (!data) return null;
  if (isLoading) return null;
  if (isError) return null;
  if (error) return null;

  return (
    <ProfileAtom.TopLayout>
      <ProfileAvatar size={{ width: 150, height: 150 }} />
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
