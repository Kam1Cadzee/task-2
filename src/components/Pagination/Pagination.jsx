import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Pagination.module.css';

// Возвражает допустимые номера траниц
const getPages = (length, currentPage, range) => {
  const isStart = currentPage - range - 1 > 1;
  const isEnd = currentPage + range + 1 < length;
  const pages = [];

  let end = 0;
  let start = 0;
  if (currentPage - range <= 0) end = Math.abs(currentPage - range - 1);
  if (currentPage + range >= length)
    start = Math.abs(length - currentPage - range);

  for (
    let i = currentPage - range - start;
    i <= currentPage + range + end;
    i += 1
  ) {
    if (i >= 1 && i <= length) pages.push(i);
  }

  return {
    isStart,
    isEnd,
    pages,
  };
};

const Pagination = ({ count, length, currentPage }) => {
  currentPage = +currentPage;
  const maxPages = Math.ceil(length / count);
  const { isStart, isEnd, pages } = getPages(maxPages, currentPage, 2);

  return (
    <div className={css.con}>
      {pages.map(page => {
        return currentPage !== page ? (
          <NavLink
            key={page}
            to={{
              path: '/',
              search: `?page=${page}`,
            }}
            className={css.link}
            activeClassName={css.activeLink}
          >
            {page}
          </NavLink>
        ) : (
          <span key={page} className={[css.activeLink, css.link].join(' ')}>
            {currentPage}
          </span>
        );
      })}
    </div>
  );
};
Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};
export default Pagination;
