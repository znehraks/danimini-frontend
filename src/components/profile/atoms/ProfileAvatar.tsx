import React from "react";
import Image from "next/image";
import { Box } from "@/components/@common/atoms/Box";

type TProflieAvatarProps = {
  url?: string;
};
export function ProfileAvatar({ url }: TProflieAvatarProps) {
  return (
    <Box style={boxStyle}>
      <Image
        width={150}
        height={150}
        src={
          url ??
          "https://m.bhc.co.kr/images/menu/img_menu_410x271_20230418_3.png"
        }
        alt="프로필 이미지"
      />
    </Box>
  );
}

const boxStyle: React.CSSProperties = {
  flex: 1,
};
