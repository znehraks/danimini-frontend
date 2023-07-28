import React from "react";
import { FeedAtom } from "../atoms";

type TFeedCardHeaderMolcProps = {
  user_email: string;
  user_avatar: string;
  feed_created_at: string;
};
export function FeedCardHeaderMolc({
  user_email,
  user_avatar,
  feed_created_at,
}: TFeedCardHeaderMolcProps) {
  return (
    <FeedAtom.CardHeaderLayout>
      <FeedAtom.CardHeaderAuthorInfo
        email={user_email}
        avatar={user_avatar}
        feedCreatedAt={feed_created_at}
      />
    </FeedAtom.CardHeaderLayout>
  );
}
