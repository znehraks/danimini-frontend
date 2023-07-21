import React, { ReactNode } from "react";
import { Card } from "antd";

type TProfileFeedCard = { children: ReactNode };

export function ProfileFeedCard({ children }: TProfileFeedCard) {
  return <Card>{children}</Card>;
}
