import React from "react";
import { AuthAtom } from "../atoms";

export function AuthInputMolc() {
  return (
    <AuthAtom.InputBox>
      <AuthAtom.Input placeholder="이메일" />
      <AuthAtom.Input placeholder="비밀번호" type="password" />
    </AuthAtom.InputBox>
  );
}
