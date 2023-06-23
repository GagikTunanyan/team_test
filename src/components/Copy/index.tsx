import React, { useState } from "react";
import styles from "./copy.module.scss";
import { CopyPropTypes, ToastModes } from "../../types";
import { Icons, Toast } from "../";

export const Copy: React.FC<CopyPropTypes> = (props) => {
  const { children, value } = props;
  const [toast, setToast] = useState<{
    show: boolean;
    mode: ToastModes;
    text: string;
  }>({ show: false, mode: "success", text: "в буфере эта ссылка." });

  const handleCopy = (v: typeof value) => {
    !!v &&
      navigator.clipboard
        .writeText(typeof v !== "string" ? JSON.stringify(v) : v)
        .then((e) => {
          setToast({
            show: true,
            mode: "success",
            text: "В Буфере Ета Ссылка.",
          });
        })
        .catch((error) => {
          setToast({
            show: true,
            mode: "error",
            text: "Пожалуйста, попробуйте еще раз",
          });
          console.error("Error copying text to clipboard:", error);
        });
  };
  return (
    <div className={styles.Copy} onClick={() => handleCopy(value)}>
      <p className="p p-bold">{children}</p>
      <p className="p p-bold">
        <Icons.Copy />
      </p>
      {!!toast.show && (
        <Toast
          mode={toast.mode}
          text={toast.text}
          onClose={() => setToast({ ...toast, show: false })}
          config={{ autoclose: true, time: 1000 }}
        />
      )}
    </div>
  );
};
