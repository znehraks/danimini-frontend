/** @jsxImportSource @emotion/react */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import { TYPO_SIZE } from "../../../../enums";

interface TTypoProps {
  size: TYPO_SIZE;
  children: ReactNode;
  style?: SerializedStyles;
}

// 가장 기본적인 폰트 관련 ui담당하는 아톰 컴포넌트입니다.
function TypoTitle({ size, children, style }: TTypoProps) {
  switch (size) {
    case TYPO_SIZE.LARGE:
      return (
        <TitleTypo css={style} className="large">
          {children}
        </TitleTypo>
      );
    case TYPO_SIZE.MEDIUM:
      return (
        <TitleTypo css={style} className="medium">
          {children}
        </TitleTypo>
      );
    case TYPO_SIZE.SMALL:
      return (
        <TitleTypo css={style} className="small">
          {children}
        </TitleTypo>
      );
    case TYPO_SIZE.TINY:
      return (
        <ContentTypo css={style} className="tiny">
          {children}
        </ContentTypo>
      );
    default:
      return null;
  }
}

function TypoContent({ size, children, style }: TTypoProps) {
  switch (size) {
    case TYPO_SIZE.LARGE:
      return (
        <ContentTypo css={style} className="large">
          {children}
        </ContentTypo>
      );
    case TYPO_SIZE.MEDIUM:
      return (
        <ContentTypo css={style} className="medium">
          {children}
        </ContentTypo>
      );
    case TYPO_SIZE.SMALL:
      return (
        <ContentTypo css={style} className="small">
          {children}
        </ContentTypo>
      );
    case TYPO_SIZE.TINY:
      return (
        <ContentTypo css={style} className="tiny">
          {children}
        </ContentTypo>
      );
    default:
      return null;
  }
}
export const Typo = {
  Title: TypoTitle,
  Content: TypoContent,
};

const Span = styled.span`
  &.large {
    font-size: 2rem;
  }
  &.medium {
    font-size: 1.2rem;
  }
  &.small {
    font-size: 1rem;
  }
  &.tiny {
    font-size: 0.8rem;
  }
  span {
    color: #9a9a9a;
  }
`;

const TitleTypo = styled(Span)`
  font-weight: 700;
`;

const ContentTypo = styled(Span)`
  font-weight: 400;
`;
