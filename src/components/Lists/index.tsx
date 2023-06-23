import React from "react";
import styles from "./lists.module.scss";
import { ListPropTypes } from "../../types";

export const List: React.FC<ListPropTypes> = ({ items, mode = "circle" }) => {
  return (
    <ul className={styles.List}>
      {items.map((item, index) => (
        <li key={index}>
          <span
            className={`${styles[mode]} ${mode === "number" ? "p-bold" : ""}`}
          >
            {mode === "number" && `${index + 1}.`}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
