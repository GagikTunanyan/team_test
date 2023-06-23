import React from "react";
import styles from "./copy.module.scss";
import { CopyPropTypes } from "../../types";
import { Icons } from "../";

export const Copy: React.FC<CopyPropTypes> = (props) => {
  const { children, value } = props;

  const handleCopy = (v: typeof value) => {
    !!v &&
      navigator.clipboard
        .writeText(JSON.stringify(v))
        .then((e) => console.log("copy"))
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
  };
  return (
    <div className={styles.Copy} onClick={() => handleCopy(value)}>
      <p className="p p-bold">{children}</p>
      <p className="p p-bold">
        <Icons.Copy />
      </p>
    </div>
  );
};
