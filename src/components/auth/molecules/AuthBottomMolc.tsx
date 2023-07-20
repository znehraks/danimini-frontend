import React from "react";
import { AuthAtom } from "../atoms";

export function AuthBottomMolc() {
  return (
    <>
      <AuthAtom.Button>로그인하기</AuthAtom.Button>
      <AuthAtom.SubSpan>아직 회원이 아니신가요?</AuthAtom.SubSpan>
      <AuthAtom.SpanForButton
        onClick={() => {
          console.log("hi");
        }}
      >
        가입하기
      </AuthAtom.SpanForButton>
    </>
  );
}
