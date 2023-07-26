import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Box } from "@/components/@common/atoms/Box";

type TProflieAvatarProps = {
  url: string;
  size: { width: number; height: number };
};
export function ProfileAvatar({
  url,
  size: { width, height },
}: TProflieAvatarProps) {
  return (
    <Box style={boxStyle} className="img-box">
      <ImageBox height={height}>
        <Image width={width} height={height} src={url} alt="프로필 이미지" />
      </ImageBox>
    </Box>
  );
}

const boxStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const ImageBox = styled.div<{ height: number }>`
  border-radius: 50%;
  width: fit-content;
  overflow: hidden;
  z-index: 1;
  height: ${(props) => `${props.height / 16}rem`};
`;
