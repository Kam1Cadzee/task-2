import React from "react";
import css from "./Input.module.css";

const Input = ({
  type = "button",
  value = "",
  onChange = () => null,
  children,
  placeholder = ""
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={css.input}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
