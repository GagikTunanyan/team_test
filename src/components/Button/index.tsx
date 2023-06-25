import React, { memo } from "react";
import { ButtonPropTypes } from "../../types";
import styles from "./button.module.scss";
import { classnames } from "../../utils";
import { Spinner } from "../";

export const Button: React.FC<ButtonPropTypes> = memo((props) => {
  const {
    children,
    disabled,
    loading,
    size = "normal",
    mode = "inline",
    ...rest
  } = props;
  const cs = classnames({
    [styles.Button]: true,
    [styles.Disabled]: !!disabled,
    [styles[size]]: true,
    [styles.Outline]: mode === "outline",
  });

  return (
    <button {...rest} className={cs}>
      {!!loading && <Spinner size="small" />}
      {!loading && children}
    </button>
  );
});
