import React from "react";
import css from "./Cell.module.css";

const Cell = ({ children, alignText, colSpan }) => {
  return (
    <td className={css.cell} colSpan={colSpan} style={{ textAlign: alignText }}>
      {children}
    </td>
  );
};
export default Cell;
