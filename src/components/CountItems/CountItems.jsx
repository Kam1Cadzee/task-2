import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './CountItems.module.css';
import { getCount } from '../../redux/University/universitySelectors';
import { changeCountItems } from '../../redux/University/universityActions';

const CountItems = ({ currentCount, changeCount, options, history }) => {
  const handleChangeCount = count => {
    changeCount(count);
    history.replace(`/?page=1`);
  };
  return (
    <div>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => handleChangeCount(opt)}
          className={currentCount === opt ? css.btnActive : css.btn}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};
CountItems.propTypes = {
  currentCount: PropTypes.number.isRequired,
  changeCount: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  currentCount: getCount(state),
});
const mapDispatchToProps = {
  changeCount: changeCountItems,
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(CountItems);
