import Image from "next/image";
import React from "react";

type TProfileDetailModalImageProps = {
  url: string;
};
export function ProfileDetailModalImage({
  url,
}: TProfileDetailModalImageProps) {
  return (
    <Image
      layout="fill"
      src={url ?? "https://www.thechooeok.com/common/img/default_profile.png"}
      alt="피드 이미지"
    />
  );
}
