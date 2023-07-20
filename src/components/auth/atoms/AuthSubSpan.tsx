import React from "react";
import { Typo } from "@/components/@common/atoms/Typo";
import { TYPO_SIZE } from "../../../../enums";

type TAuthSubSpanProps = {
  children: React.ReactNode;
};
export function AuthSubSpan({ children }: TAuthSubSpanProps) {
  return <Typo.Content size={TYPO_SIZE.TINY}>{children}</Typo.Content>;
}
