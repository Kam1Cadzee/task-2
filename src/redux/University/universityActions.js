import * as axios from 'axios';
import {
  CHANGE_SEARCH,
  SET_ERROR,
  SET_FETCHING,
  RESET,
  SET_ITEMS,
  ADD_SELECT_ITEM,
  REMOVE_SELECT_ITEM,
  SET_SELECT_ITEMS,
  CHANGE_COUNT_ITEMS,
} from './universityTypes';
import getDataWithId from '../../util/getDataWithId';

const getUrl = search =>
  `http://universities.hipolabs.com/search?country=${search}`;

export const setSearch = value => ({ type: CHANGE_SEARCH, payload: value });
export const reset = () => ({ type: RESET });
export const setItems = items => ({ type: SET_ITEMS, payload: items });
export const changeFetching = isFetch => ({
  type: SET_FETCHING,
  payload: isFetch,
});
export const setError = errorMessage => ({
  type: SET_ERROR,
  payload: errorMessage,
});

export const addSelectItem = id => ({ type: ADD_SELECT_ITEM, payload: id });
export const removeSelectItem = id => ({
  type: REMOVE_SELECT_ITEM,
  payload: id,
});
export const setSelectItems = items => ({
  type: SET_SELECT_ITEMS,
  payload: items,
});
export const fetchData = search => dispatch => {
  dispatch(changeFetching(true));
  dispatch(setSelectItems([]));
  axios
    .get(getUrl(search))
    .then(data => {
      dispatch(setItems(getDataWithId(data.data)));
    })
    .catch(err => dispatch(setError(err.message)))
    .finally(() => dispatch(changeFetching(false)));
};

export const changeCountItems = count => ({
  type: CHANGE_COUNT_ITEMS,
  payload: count,
});
