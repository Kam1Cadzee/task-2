import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import {
  getCount,
  getItemsLength,
} from '../../redux/University/universitySelectors';
import getPageFromProps from '../../util/getPageFromProps';

const mapStateToProps = (state, props) => ({
  count: getCount(state),
  length: getItemsLength(state),
  currentPage: getPageFromProps(props) || 1,
});
export default compose(
  withRouter,
  connect(mapStateToProps),
)(Pagination);
