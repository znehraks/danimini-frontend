import React from "react";
import { ProfileAtom } from "../atoms";
import { ProfileAvatar } from "../atoms/ProfileAvatar";

export function ProfileTop() {
  return (
    <ProfileAtom.TopLayout>
      <ProfileAvatar />
      <ProfileAtom.InfoLayout>정보들</ProfileAtom.InfoLayout>
    </ProfileAtom.TopLayout>
  );
}
