import React from "react";
import { Modal as AntModal, ModalProps } from "antd";
import styled from "@emotion/styled";

export type TProfileDetailModalProps = {} & ModalProps;
export function ProfileDetailModal({
  children,
  ...props
}: TProfileDetailModalProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Modal {...props}>{children}</Modal>
  );
}

const Modal = styled(AntModal)`
  .ant-modal-content {
    padding: 0;
  }
  .ant-modal-body {
    height: 28.125rem;
    display: flex;
    flex-direction: row;
    img {
      position: relative !important;
      width: auto !important;
      height: auto !important;
      object-fit: contain !important;
    }
  }
  .ant-modal-footer {
    display: none;
  }
`;
