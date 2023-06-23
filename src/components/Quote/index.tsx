import React from "react";
import styles from "./quote.module.scss";
import { QuotePropTypes } from "../../types";
import { classnames } from "../../utils";

export const Quote: React.FC<QuotePropTypes> = ({ mode = "info", text }) => {
  const cs = classnames({
    [styles.Quote]: true,
    [styles[mode]]: true,
  });
  return (
    <div className={cs}>
      <p className="p">{text}</p>
    </div>
  );
};
