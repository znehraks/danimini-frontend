import React from "react";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { ProfileAtom } from "@/components/profile/atoms";
import { ProfileTop } from "@/components/profile/molecules/ProfileTop";

export default function ProfilePage() {
  return (
    <PageLayout>
      <ProfileTop />
      <ProfileAtom.Tab />
      유저프로필
    </PageLayout>
  );
}
