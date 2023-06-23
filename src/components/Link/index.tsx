import React, { memo } from "react";
import { Link as A } from "react-router-dom";
import styles from "./link.module.scss";
import { LinksPropTypes } from "../../types";

export const Link: React.FC<LinksPropTypes> = memo((props) => {
  const { to, children } = props;
  return (
    <A to={to} className={styles.Link}>
      {children}
    </A>
  );
});
