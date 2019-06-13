import React from "react";
import css from "./SelectedItem.module.css";
const SelectedItem = ({ name, id, onRemove }) => {
  return (
    <div className={css.item}>
      {name}
      <button type="button" onClick={() => onRemove(id)} className={css.btn}>
        x
      </button>{" "}
    </div>
  );
};
export default SelectedItem;
