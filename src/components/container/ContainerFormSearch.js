import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/University/universityActions';
import FormSearch from '../FormSearch/FormSearch';
import { getSearch } from '../../redux/University/universitySelectors';

class ContainerFormSearch extends React.Component {
  handelSubmit = e => {
    e.preventDefault();
    const { search, fetchData } = this.props;
    fetchData(search);
  };

  handleChange = e => {
    const { setSearch } = this.props;
    setSearch(e.target.value);
  };

  handleReset = () => {
    const { reset, history } = this.props;
    reset();
    history.replace('/');
  };

  render() {
    const { search } = this.props;

    return (
      <FormSearch
        onChange={this.handleChange}
        onSubmit={this.handelSubmit}
        onReset={this.handleReset}
        search={search}
        {...this.props}
      />
    );
  }
}
ContainerFormSearch.propTypes = {
  search: PropTypes.string,
  reset: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  search: getSearch(state),
});
const mapDisaptchToProps = {
  setSearch: actions.setSearch,
  fetchData: actions.fetchData,
  reset: actions.reset,
};
export default compose(
  connect(
    mapStateToProps,
    mapDisaptchToProps,
  ),
  withRouter,
)(ContainerFormSearch);
