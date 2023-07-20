import React from "react";
import { AuthAtom } from "../atoms";
import { AuthBottomMolc } from "../molecules/AuthBottomMolc";
import { AuthInputMolc } from "../molecules/AuthInputMolc";
import { AuthTitleMolc } from "../molecules/AuthTItleMolc";

export function AuthContentBoxTemp() {
  return (
    <AuthAtom.ContentBox>
      <AuthTitleMolc />
      <AuthInputMolc />
      <AuthBottomMolc />
    </AuthAtom.ContentBox>
  );
}
