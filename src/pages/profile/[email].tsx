import React from "react";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { ProfileTop } from "@/components/profile/molecules/ProfileTop";
import { ProfileNav } from "@/components/profile/molecules/ProfileNav";

export default function ProfilePage() {
  return (
    <PageLayout>
      <ProfileTop />
      <ProfileNav
        items={[
          { label: "aaa일", key: "1", children: "일차일드" },
          { label: "aaa이", key: "2", children: "이차일드" },
          { label: "aaaaaa삼", key: "3", children: "삼차일드" },
        ]}
      />
      유저프로필
    </PageLayout>
  );
}
