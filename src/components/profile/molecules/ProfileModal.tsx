import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ProfileAtom } from "../atoms";
import { activeFeedModalIdAtom } from "@/recoilAtoms";

export function ProfileModal() {
  const [activeFeedModalId, setActiveFeedModalId] = useRecoilState(
    activeFeedModalIdAtom
  );
  const [width, setWidth] = useState("50vw");

  const resizeWidth = useCallback(() => {
    if (window.innerWidth < 550) {
      setWidth("80vw");
    } else {
      setWidth("50vw");
    }
  }, []);
  useEffect(() => {
    resizeWidth();
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, [resizeWidth]);

  return (
    <ProfileAtom.DetailModal
      width={width}
      open={!!activeFeedModalId}
      onCancel={() => {
        setActiveFeedModalId(undefined);
      }}
    >
      <ProfileAtom.ModalImage url="https://www.thechooeok.com/common/img/default_profile.png" />
      <ProfileAtom.ModalContent />
    </ProfileAtom.DetailModal>
  );
}
