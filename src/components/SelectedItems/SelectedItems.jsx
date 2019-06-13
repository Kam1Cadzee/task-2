import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSelectedItems } from '../../redux/University/universitySelectors';
import { removeSelectItem } from '../../redux/University/universityActions';
import SelectedItem from './SelectedItem/SelecetedItem';
import css from './SelectedItems.module.css';
import anim from '../animation-style/AnimationSelecetedRow.module.css';

const SelectedItems = ({ items, removeItem }) => {
  return (
    <TransitionGroup className={css.container}>
      {items.map(item => (
        <CSSTransition key={item.id} timeout={500} classNames={anim}>
          <SelectedItem name={item.name} id={item.id} onRemove={removeItem} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
SelectedItems.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  return {
    items: getSelectedItems(state),
  };
};
const mapDispatchToProps = {
  removeItem: removeSelectItem,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedItems);
