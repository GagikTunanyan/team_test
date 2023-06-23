import React from "react";
import styles from "./container.module.scss";
import { ContainerPropTypes } from "../../types";
import { classnames } from "../../utils";

export const Container: React.FC<ContainerPropTypes> = (props) => {
  const { title, left, right, seperat } = props;

  const csChild = classnames({
    [styles.Child]: true,
    [styles.Half]: seperat === "half",
  });

  return (
    <section className={styles.Container}>
      <div className={styles.Title}>{title}</div>
      <div className={csChild}>
        <div className={styles.Left}>{left}</div>
        <div className={styles.Right}>{right}</div>
      </div>
    </section>
  );
};
