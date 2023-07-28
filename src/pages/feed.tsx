import React from "react";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { FeedAtom } from "@/components/feed/atoms";
import { getFeedInfo } from "@/api";
import { FeedCardHeaderMolc } from "@/components/feed/molecules/FeedCardHeaderMolc";
import { FeedCardCommentContentMolc } from "@/components/feed/molecules/FeedCardCommentContentMolc";

export default function FeedPage() {
  const { data, isLoading, isError } = useQuery(["feeds"], getFeedInfo);
  console.log(data);

  if (!data) return null;
  if (isLoading) return null;
  if (isError) return null;
  return (
    <PageLayout>
      {data.map((item) => (
        <FeedAtom.CardLayout>
          <FeedCardHeaderMolc
            user_email={item.user_email}
            user_avatar={item.user_avatar}
            feed_created_at={item.feed_created_at}
          />
          <FeedAtom.CardImageBox desc={item.feed_desc} src={item.feed_thumb} />
          <FeedAtom.CardCommentLayout>
            <FeedAtom.CardCommentHeaderLayout>
              <FeedAtom.CardCommentHeader />
            </FeedAtom.CardCommentHeaderLayout>
            <FeedCardCommentContentMolc
              feed_id={item.feed_id}
              comments={item.comments}
            />
          </FeedAtom.CardCommentLayout>
        </FeedAtom.CardLayout>
      ))}
    </PageLayout>
  );
}
