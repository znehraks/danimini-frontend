/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

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

type TProfileInfo = {
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
  user_updated_at: string;
};
export const getProfileInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  const res = await axios.get<
    [
      TProfileInfo[],
      [{ feed_count: number }],
      [{ todo_count: number }],
      [{ following_count: number }],
      [{ follower_count: number }],
    ]
  >("/users/me", {
    headers: { Authorization: accessToken },
  });

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
