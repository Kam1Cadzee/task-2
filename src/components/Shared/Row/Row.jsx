import React from "react";
import css from "./Row.module.css";

const Row = ({ onClick, isSelectRow, children }) => {
  return (
    <tr onClick={onClick} className={isSelectRow ? css.rowSelect : css.row}>
      {children}
    </tr>
  );
};

export default Row;
