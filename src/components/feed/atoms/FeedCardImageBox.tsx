import React from "react";

type TFeedCardImageBox = { desc: string; src: string };

export function FeedCardImageBox({ desc, src }: TFeedCardImageBox) {
  return <img src={src} alt={desc} />;
}
