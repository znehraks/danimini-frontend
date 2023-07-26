import React from "react";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { ProfileTop } from "@/components/profile/molecules/ProfileTop";
import { ProfileNav } from "@/components/profile/molecules/ProfileNav";
import { PROFILE_TAB } from "../../../enums";
import { ProfileBottom } from "@/components/profile/molecules/ProfileBottom";
import { ProfileModal } from "@/components/profile/molecules/ProfileModal";

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
      <ProfileBottom />
      <ProfileModal />
    </PageLayout>
  );
}
