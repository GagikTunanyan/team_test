import React from "react";
import styles from "./table.module.scss";
import { TablePropTypes } from "../../types";
import { classnames } from "../../utils";

export const Table: React.FC<TablePropTypes> = ({ head, body, className }) => {
  const cs = classnames({
    [styles.Table]: true,
    [className as string]: !!className,
  });
  return (
    <table className={cs}>
      <thead>
        <tr>
          {head.map((item) => (
            <th key={item.value} colSpan={item.col} className="p p-bold">
              {item.displayValue}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, index) => (
          <tr key={index}>
            {head.map((col, indx) => (
              <td key={`${index}/${indx}`} colSpan={col.col} className="p-s">
                {row[col.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
