/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const checkToken = (errorCode: number) => {
  if (errorCode === -1) {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
};

export const getMe = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  const res = await axios.get<[{ user_email: string }]>("/users/me", {
    headers: { Authorization: accessToken },
  });
  console.log("res", res);
  checkToken((res.data as any).errorCode);
  return res.data[0].user_email;
};

type TLoginArgs = {
  email: string;
  password: string;
};
type ILoginReturnData = {
  accessToken: string;
  email: string;
};
export const login = async ({ email, password }: TLoginArgs) => {
  const res = await axios.post<ILoginReturnData>("/users/login", {
    email,
    password,
  });
  return res;
};

export type TRawProfileInfo = {
  feed_created_at: string;
  feed_desc: string;
  feed_id: string;
  feed_thumb: string;
  feed_title: string;
  feed_updated_at: string;
  todo_created_at: string;
  todo_desc: string;
  todo_id: string;
  todo_is_finished: boolean;
  todo_point: number;
  todo_title: string;
  todo_updated_at: string;
  user_created_at: string;
  user_email: string;
  user_id: string;
  user_desc: string;
  user_avatar: string;
  user_updated_at: string;
};

export type TProfileInfo = {
  basicInfo: TRawProfileInfo[];
  feedCount: number;
  todoCount: number;
  followingCount: number;
  followerCount: number;
};

export const getProfileInfo = async (isMe: boolean, userEmail: string) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  const res = await axios.get<
    [
      TRawProfileInfo[],
      [{ feed_count: number }],
      [{ todo_count: number }],
      [{ following_count: number }],
      [{ follower_count: number }],
    ]
  >(isMe ? "/users/profile/me" : `/users/${userEmail}`, {
    headers: { Authorization: accessToken },
  });
  checkToken((res.data as any).errorCode);
  // const [
  //   basicInfo,
  //   [{ feed_count }],
  //   [{ todo_count }],
  //   [{ following_count }],
  //   [{ follower_count }],
  // ] = res.data;

  const basicInfo = res.data[0];
  const feedCount = res.data[1][0].feed_count;
  const todoCount = res.data[2][0].todo_count;
  const followingCount = res.data[3][0].following_count;
  const followerCount = res.data[4][0].follower_count;

  return {
    basicInfo,
    feedCount,
    todoCount,
    followingCount,
    followerCount,
  };
};

export type TFeedInfo = {
  user_email: string;
  user_avatar: string;
  feed_author_id: string;
  feed_created_at: string;
  feed_desc: string;
  feed_id: string;
  feed_thumb: string;
  feed_title: string;
  todo_id: string;
  feed_updated_at: string;
  comments: {
    comment_id: string;
    comment_content: string;
    comment_author_id: string;
    comment_author_email: string;
    comment_created_at: string;
    comment_updated_at: string;
  }[];
};

export const getFeedInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;

  const res = await axios.get<TFeedInfo[]>("/feeds/following", {
    headers: { Authorization: accessToken },
  });
  checkToken((res.data as any).errorCode);

  return res.data;
};

type TCreateCommentData = {
  comment_content: string;
  feed_id: string;
};
export const createComment = async ({
  comment_content,
  feed_id,
}: TCreateCommentData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;

  const res = await axios.post<TCreateCommentData>(
    "/comments",
    { comment_content, feed_id },
    {
      headers: { Authorization: accessToken },
    }
  );

  checkToken((res.data as any).errorCode);

  return res.data;
};
