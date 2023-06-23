import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ToastPropTypes } from "../../types";
import styles from "./toast.module.scss";
import { classnames } from "../../utils";

export const Toast: React.FC<ToastPropTypes> = ({
  mode,
  text,
  onClose,
  config,
}) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (config?.autoclose) {
      const timer = setTimeout(() => onClose?.(), config.time ?? 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose, config]);

  const handleToastClick = () => {
    onClose?.();
  };

  const cs = classnames({
    [styles.Toast]: true,
    [styles[mode as string]]: true,
  });

  return createPortal(
    <div className={cs} ref={toastRef} onClick={handleToastClick}>
      <p className="p p-bold">{text}</p>
    </div>,
    document.body
  );
};
