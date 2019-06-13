import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import FormSearch from '../Table/Table';
import {
  getCount,
  getItemsByPage,
} from '../../redux/University/universitySelectors';
import getPageFromProps from '../../util/getPageFromProps';

const mapStateToProps = (state, props) => {
  const page = getPageFromProps(props) || 1;
  return {
    items: getItemsByPage(state, page),
    startNumber: (page - 1) * getCount(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
)(FormSearch);
