import React from "react";
import { HomeOutlined, TableOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/api";

export function SideMenu() {
  const router = useRouter();
  const {
    data: myEmail,
    isError,
    error,
    isLoading,
  } = useQuery(["me"], getMe, {
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: true,
    retryDelay: 3000,
  });

  if (!myEmail) return null;
  if (isError) return null;
  if (error) return null;
  if (isLoading) return null;

  return (
    <Wrapper>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          router.push(`/feed`);
        }}
        onClick={() => {
          router.push(`/feed`);
        }}
      >
        <HomeOutlined />
        <span style={spanStyle}>홈</span>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          router.push(`/profile/${myEmail}`);
        }}
        onClick={() => {
          router.push(`/profile/${myEmail}`);
        }}
      >
        <UserOutlined />
        <span style={spanStyle}>프로필</span>
      </div>

      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          router.push(`/todo/${myEmail}`);
        }}
        onClick={() => {
          router.push(`/todo/${myEmail}`);
        }}
      >
        <TableOutlined />
        <span style={spanStyle}>할 일</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  padding: 1rem;
  flex: 1;
  border-right: 1px solid #ececec;
  div {
    cursor: pointer;
    padding: 0 0.8rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.2rem;
    span {
      :last-child {
        padding-top: 0.5rem;
      }
      svg {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
      }
    }
  }
`;

const spanStyle: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "1.2rem",
  paddingBottom: "0.4rem",
};
