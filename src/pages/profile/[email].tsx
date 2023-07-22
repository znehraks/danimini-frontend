import React from "react";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { ProfileTop } from "@/components/profile/molecules/ProfileTop";
import { ProfileNav } from "@/components/profile/molecules/ProfileNav";
import { PROFILE_TAB } from "../../../enums";

export default function ProfilePage() {
  return (
    <PageLayout>
      <ProfileTop />
      <ProfileNav
        items={[
          { label: "게시물", key: PROFILE_TAB.POST },
          { label: "할 일", key: PROFILE_TAB.TODO },
        ]}
      />
      유저프로필
    </PageLayout>
  );
}
