import React from "react";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";

type TAuthTitleProps = {
  children: React.ReactNode;
};
export function AuthTitle({ children }: TAuthTitleProps) {
  return <Typo.Title size={TYPO_SIZE.LARGE}>{children}</Typo.Title>;
}
