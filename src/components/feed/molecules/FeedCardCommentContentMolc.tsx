import React, { useCallback, useState } from "react";
import { FeedAtom } from "../atoms";
import { TFeedInfo } from "@/api";

type TFeedCardCommentContentMolcProps = {
  feed_id: TFeedInfo["feed_id"];
  comments: TFeedInfo["comments"];
};
export function FeedCardCommentContentMolc({
  feed_id,
  comments,
}: TFeedCardCommentContentMolcProps) {
  const [commentExpanded, setCommentExpanded] = useState(false);
  const [showAllComments, setAllComments] = useState(false);
  const handleOnClickCommentExpandedButton = useCallback(() => {
    setCommentExpanded(true);
  }, []);
  const handleOnClickShowAllCommentsButton = useCallback(() => {
    setAllComments(true);
  }, []);
  const comment = comments[0];
  return (
    <FeedAtom.CardCommentContentLayout>
      {showAllComments ? (
        <>
          {comments.map((c) => {
            return (
              <FeedAtom.CardCommentContentLine
                commentExpanded={commentExpanded}
                key={c.comment_id}
                email={c.comment_author_email}
                content={c.comment_content}
              />
            );
          })}
        </>
      ) : (
        <FeedAtom.CardCommentContentLine
          commentExpanded={commentExpanded}
          key={comment.comment_id}
          email={comment.comment_author_email}
          content={comment.comment_content}
        />
      )}

      {!commentExpanded && comment.comment_content.length > 30 && (
        <FeedAtom.CardCommentContentLoadMoreButton
          text="더 보기"
          onClick={handleOnClickCommentExpandedButton}
        />
      )}

      {/* 원래는 댓글 모두 보기 하면, 모달이 보여져야함 => 추후 데이터가 많아졌을 때를 대비해서 무한 스크롤 페칭으로 변경해야함 */}
      {!showAllComments && comments.length > 1 && (
        <FeedAtom.CardCommentContentLoadMoreButton
          text={`댓글 ${comments.length - 1}개 모두 보기`}
          onClick={handleOnClickShowAllCommentsButton}
        />
      )}
      <FeedAtom.CardCommentContentInput feed_id={feed_id} />
    </FeedAtom.CardCommentContentLayout>
  );
}
