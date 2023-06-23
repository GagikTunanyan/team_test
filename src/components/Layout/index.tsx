import React from "react";
import styles from "./layout.module.scss";
import { LayoutPropTypes } from "../../types";

export const Layout: React.FC<LayoutPropTypes> = (props) => {
  const { children } = props;

  return (
    <div className={styles.LayoutParent}>
      <div className={styles.Layout}>{children}</div>
    </div>
  );
};
