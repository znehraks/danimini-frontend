import React from "react";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/@common/temps/PageLayout";
import { FeedAtom } from "@/components/feed/atoms";
import { getFeedInfo } from "@/api";

export default function FeedPage() {
  const { data, isLoading, isError } = useQuery(["feeds/me"], getFeedInfo);
  console.log(data);

  if (!data) return null;
  if (isLoading) return null;
  if (isError) return null;
  return (
    <PageLayout>
      {data.map((item) => (
        <FeedAtom.CardLayout>
          <FeedAtom.CardHeaderLayout>
            <FeedAtom.CardHeaderAuthorInfo
              email={item.user_email}
              avatar={item.user_avatar}
              feedCreatedAt={item.feed_created_at}
            />
          </FeedAtom.CardHeaderLayout>
          <FeedAtom.CardImageBox desc={item.feed_desc} src={item.feed_thumb} />
          <FeedAtom.CardCommentLayout>
            <FeedAtom.CardCommentHeaderLayout>
              <FeedAtom.CardCommentHeader />
            </FeedAtom.CardCommentHeaderLayout>
            {item.comments.map((comment) => (
              <FeedAtom.CardCommentContent>
                {comment.comment_author_email} {comment.comment_content}
              </FeedAtom.CardCommentContent>
            ))}
          </FeedAtom.CardCommentLayout>
        </FeedAtom.CardLayout>
      ))}
    </PageLayout>
  );
}
