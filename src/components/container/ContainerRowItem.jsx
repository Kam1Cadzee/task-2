import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RowItem from '../Table/RowItem/RowItem';
import * as actions from '../../redux/University/universityActions';
import { hasSelectedItemById } from '../../redux/University/universitySelectors';

class ContainerRowItem extends React.Component {
  handleClick = () => {
    const { addSelectItem, removeSelectItem, isSelectRow, item } = this.props;
    if (isSelectRow) {
      removeSelectItem(item.id);
    } else {
      addSelectItem(item.id);
    }
  };

  render() {
    const { addSelectItem, removeSelectItem, ...rest } = this.props;
    return <RowItem {...rest} selectItem={this.handleClick} />;
  }
}
ContainerRowItem.propTypes = {
  addSelectItem: PropTypes.func.isRequired,
  removeSelectItem: PropTypes.func.isRequired,
  isSelectRow: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = (state, props) => {
  return {
    isSelectRow: hasSelectedItemById(state, props.item.id),
  };
};
const mapDispatchToProps = {
  addSelectItem: actions.addSelectItem,
  removeSelectItem: actions.removeSelectItem,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerRowItem);
