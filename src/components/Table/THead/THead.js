import React from 'react';
import PropTypes from 'prop-types';
import { Desktop, Tablet } from '../../media/media';
import css from './THead.module.css';
import HeadCell from '../../Shared/HeadCell/HeadCell';

const THead = ({ headers }) => {
  return (
    <thead className={css.header}>
      <Desktop>
        <tr>
          {headers.map(header => (
            <HeadCell key={header}>{header}</HeadCell>
          ))}
        </tr>
      </Desktop>
      <Tablet>
        <tr>
          {/* Для меньших размеров, показать только 2 столбца */}
          <HeadCell>{headers[0]}</HeadCell>
          <HeadCell>{headers[1]}</HeadCell>
          <HeadCell />
        </tr>
      </Tablet>
    </thead>
  );
};
THead.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default THead;
