import { combineReducers } from 'redux';
import {
  CHANGE_SEARCH,
  SET_FETCHING,
  RESET,
  SET_ERROR,
  SET_ITEMS,
  ADD_SELECT_ITEM,
  REMOVE_SELECT_ITEM,
  SET_SELECT_ITEMS,
  CHANGE_COUNT_ITEMS,
} from './universityTypes';

const init = {
  isFetching: false,
  error: null,
  items: [],
};

const searchReducer = (state = 'ukraine', action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    case RESET:
      return '';
    default:
      return state;
  }
};
const universityReducer = (state = init, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case RESET:
      return init;
    default:
      return state;
  }
};
const selectedReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SELECT_ITEM:
      return [...state, action.payload];
    case REMOVE_SELECT_ITEM:
      return state.filter(item => item !== action.payload);
    case SET_SELECT_ITEMS:
      return action.payload;
    case RESET:
      return [];
    default:
      return state;
  }
};

const paginationReducer = (state = { count: 5 }, action) => {
  switch (action.type) {
    case CHANGE_COUNT_ITEMS:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
const universityData = combineReducers({
  university: universityReducer,
  selectedItems: selectedReducer,
});
export default combineReducers({
  search: searchReducer,
  universityData,
  pagination: paginationReducer,
});
