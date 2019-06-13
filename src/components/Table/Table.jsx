import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import THead from './THead/THead';
import ContainerRowItem from '../container/ContainerRowItem';
import css from './Table.module.css';
import anim from '../animation-style/AnimationTable.module.css';

const Table = ({ items, startNumber /* Начало порядкого номера строки */ }) => {
  const headers = ['#', 'Name', 'Domains', 'Country', 'ISO CODE', 'Site'];
  return (
    <table className={css.table}>
      <THead headers={headers} />
      <TransitionGroup component="tbody">
        {items.map((item, index) => (
          <CSSTransition key={item.id} timeout={300} classNames={anim}>
            <ContainerRowItem number={startNumber + index + 1} item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </table>
  );
};
Table.propTypes = {
  items: PropTypes.array.isRequired,
  startNumber: PropTypes.number.isRequired,
};
export default Table;
