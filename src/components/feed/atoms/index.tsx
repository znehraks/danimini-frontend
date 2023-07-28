import { FeedCardCommentContentLine } from "./FeedCardCommentContent";
import { FeedCardCommentContentInput } from "./FeedCardCommentContentInput";
import { FeedCardCommentContentLayout } from "./FeedCardCommentContentLayout";
import { FeedCardCommentContentLoadMoreButton } from "./FeedCardCommentContentLoadMoreButton";
import { FeedCardCommentHeader } from "./FeedCardCommentHeader";
import { FeedCardCommentHeaderLayout } from "./FeedCardCommentHeaderLayout";
import { FeedCardCommentLayout } from "./FeedCardCommentLayout";
import { FeedCardHeaderAuthorInfo } from "./FeedCardHeaderAuthorInfo";
import { FeedCardHeaderLayout } from "./FeedCardHeaderLayout";
import { FeedCardImageBox } from "./FeedCardImageBox";
import { FeedCardLayout } from "./FeedCardLayout";
import { FeedCardUtilButton } from "./FeedCardUtilButton";
import { FeedCardUtilLayout } from "./FeedCardUtilLayout";

export const FeedAtom = {
  CardLayout: FeedCardLayout,
  CardHeaderLayout: FeedCardHeaderLayout,
  CardHeaderAuthorInfo: FeedCardHeaderAuthorInfo,
  CardImageBox: FeedCardImageBox,
  UtilLayout: FeedCardUtilLayout,
  UtilButton: FeedCardUtilButton,
  CardCommentLayout: FeedCardCommentLayout,
  CardCommentHeaderLayout: FeedCardCommentHeaderLayout,
  CardCommentHeader: FeedCardCommentHeader,
  CardCommentContentLine: FeedCardCommentContentLine,
  CardCommentContentLayout: FeedCardCommentContentLayout,
  CardCommentContentLoadMoreButton: FeedCardCommentContentLoadMoreButton,
  CardCommentContentInput: FeedCardCommentContentInput,
};
