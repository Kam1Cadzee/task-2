import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getItemsLength,
  getSelectedItemsLength,
} from '../../redux/University/universitySelectors';
import CountItems from '../CountItems/CountItems';
import css from './Status.module.css';

const Status = ({ selected, length }) => {
  return (
    <div className={css.con}>
      <p>
        Selected university: {selected} / {length}
      </p>
      <CountItems options={[5, 10, 15]} />
    </div>
  );
};
Status.propTypes = {
  selected: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  selected: getSelectedItemsLength(state),
  length: getItemsLength(state),
});
export default connect(mapStateToProps)(Status);
