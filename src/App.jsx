import React from 'react';
import { connect } from 'react-redux';
import FormSearch from './components/container/ContainerFormSearch';
import Table from './components/container/ContainerTable';
import Status from './components/Status/Status';
import {
  getFetch,
  getItemsLength,
} from './redux/University/universitySelectors';
import css from './App.module.css';
import Pagination from './components/container/ContainerPagination';
import SelectedItems from './components/SelectedItems/SelectedItems';
import Loader from './components/Loader/Loader';

const App = ({ length, isLoading }) => {
  console.log(isLoading);
  return (
    <div style={{ margin: '0 10px' }}>
      <FormSearch />
      {isLoading && <Loader />}
      {/* Если нету елментов, ничего не редерить */}
      {length > 0 ? (
        <>
          <SelectedItems />
          <Status />
          <Table />
          <Pagination />
        </>
      ) : (
        <p className={css.text}>No found items</p>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  length: getItemsLength(state),
  isLoading: getFetch(state),
});
export default connect(mapStateToProps)(App);
