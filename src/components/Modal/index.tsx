import React from "react";
import ReactDOM from "react-dom";
import { ModalPropTypes } from "../../types";
import styles from "./modal.module.scss";
import { classnames } from "../../utils";

export const Modal: React.FC<ModalPropTypes> = ({
  isOpen,
  onClose,
  children,
  contentClassName,
}) => {
  const contentCS = classnames({
    [styles.ModalContent]: true,
    [contentClassName as string]: !!contentClassName,
  });
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={styles.ModalOverlay}
      onClick={(e) => {
        e.stopPropagation();
        onClose?.();
      }}
    >
      <div className={contentCS} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className={styles.CloseButton}
        />
      </div>
    </div>,
    document.body
  );
};
