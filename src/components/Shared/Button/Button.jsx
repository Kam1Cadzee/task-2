import React from 'react';
import css from './Button.module.css';

const Button = ({
  type = 'button',
  onClick = () => null,
  children,
  theme = false,
  style,
}) => {
  const names = [theme ? css.btnText : css.btn, style];
  return (
    <button type={type} onClick={onClick} className={names.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
