import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { AuthAtom } from "../atoms";
import { emailInputAtom, pwdInputAtom } from "@/recoilAtoms";

export function AuthInputMolc() {
  const [email, setEmail] = useRecoilState(emailInputAtom);
  const [pwd, setPwd] = useRecoilState(pwdInputAtom);

  const handleOnChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = e;
      setEmail(value);
    },
    [setEmail]
  );

  const handleOnChangePwd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = e;
      setPwd(value);
    },
    [setPwd]
  );

  return (
    <AuthAtom.InputBox>
      <AuthAtom.Input
        value={email}
        onChange={handleOnChangeEmail}
        placeholder="이메일"
      />
      <AuthAtom.Input
        value={pwd}
        onChange={handleOnChangePwd}
        placeholder="비밀번호"
        type="password"
      />
    </AuthAtom.InputBox>
  );
}
