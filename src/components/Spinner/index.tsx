import React, { memo } from "react";
import styles from "./spinnder.module.scss";
import { SpinnerPropTypes } from "../../types";
import { classnames } from "../../utils";

export const Spinner: React.FC<SpinnerPropTypes> = memo(
  ({ size = "small", show = true }) => {
    const cs = classnames({
      [styles.Spinner]: true,
      [styles[size]]: true,
    });
    return show ? <span className={cs} /> : <></>;
  }
);
