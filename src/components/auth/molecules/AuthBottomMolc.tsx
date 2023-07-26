import React from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useRouter } from "next/router";
import { AuthAtom } from "../atoms";
import { emailInputAtom, pwdInputAtom, userEmailAtom } from "@/recoilAtoms";
import { login } from "@/api";

export function AuthBottomMolc() {
  const [email] = useRecoilState(emailInputAtom);
  const [password] = useRecoilState(pwdInputAtom);
  const [, setUserEmail] = useRecoilState(userEmailAtom);
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: ({ data: { accessToken, email: _email } }) => {
      console.log("성공", accessToken, _email);
      localStorage.setItem("accessToken", accessToken);
      if (accessToken) {
        message.success(`${_email}님 안녕하세요!`);
        setUserEmail(_email);
        router.replace("/feed");
      }
    },
    onError: () => {
      console.log("에러");
    },
  });
  return (
    <>
      <AuthAtom.Button
        onClick={() => {
          console.log("hihi");
          mutate({ email, password });
        }}
      >
        로그인하기
      </AuthAtom.Button>
      <AuthAtom.SubSpan>아직 회원이 아니신가요?</AuthAtom.SubSpan>
      <AuthAtom.SpanForButton onClick={() => {}}>
        가입하기
      </AuthAtom.SpanForButton>
    </>
  );
}
