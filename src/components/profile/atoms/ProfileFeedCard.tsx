import React from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { ProfileFeedCardLayout } from "./ProfileFeedCardLayout";
import { activeFeedModalIdAtom } from "@/recoilAtoms";

type TProfileFeedCardProps = { url: string };

export function ProfileFeedCard({ url }: TProfileFeedCardProps) {
  const [, setActiveFeedModalId] = useRecoilState(activeFeedModalIdAtom);
  return (
    <ProfileFeedCardLayout>
      <Image
        onClick={() => {
          setActiveFeedModalId("hi");
        }}
        width={250}
        height={250}
        src={url ?? "https://www.thechooeok.com/common/img/default_profile.png"}
        alt="피드 이미지"
      />
    </ProfileFeedCardLayout>
  );
}
