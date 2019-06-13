import React from 'react';
import PropTypes from 'prop-types';
import css from './HeadCell.module.css';

const HeadCell = ({ children }) => {
  return <th className={css.cell}>{children}</th>;
};
HeadCell.propTypes = {
  children: PropTypes.string,
};
export default HeadCell;
