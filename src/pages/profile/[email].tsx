import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { ProfileTop } from "@/components/profile/molecules/ProfileTop";
import { ProfileNav } from "@/components/profile/molecules/ProfileNav";
import { PROFILE_TAB } from "../../../enums";
import { ProfileBottom } from "@/components/profile/molecules/ProfileBottom";
import { ProfileModal } from "@/components/profile/molecules/ProfileModal";
import { getProfileInfo } from "@/api";
import { userEmailAtom } from "@/recoilAtoms";

export default function ProfilePage() {
  const router = useRouter();
  const [userEmail] = useRecoilState(userEmailAtom);

  console.log("userEmail", userEmail);
  console.log("router.query.email", router.query.email);
  const isMe = userEmail === router.query.email;
  const targetEmail = router?.query?.email as string;
  const { data, isError, error, isLoading } = useQuery(
    ["profile", isMe, targetEmail],
    () => getProfileInfo(isMe, targetEmail),
    {
      _optimisticResults: "optimistic",
      refetchOnWindowFocus: true,
      retryDelay: 3000,
    }
  );

  console.log("datatata", data);

  if (!data) return null;
  if (isLoading) return null;
  if (isError) return null;
  if (error) return null;
  return (
    <PageLayout>
      <ProfileTop data={data} userEmail={router.query.email as string} />
      <ProfileNav
        items={[
          { label: "게시물", key: PROFILE_TAB.POST },
          { label: "할 일", key: PROFILE_TAB.TODO },
        ]}
      />
      <ProfileBottom data={data} />
      <ProfileModal />
    </PageLayout>
  );
}
