import { createSelector } from 'reselect';

export const getSearch = state => state.search;
export const getItems = state => state.universityData.university.items;
export const getFetch = state => state.universityData.university.isFetching;
export const getIdSelectedItems = state => state.universityData.selectedItems;
export const getCount = state => state.pagination.count;

export const getItemsLength = createSelector(
  [getItems],
  items => items.length,
);

export const getSelectedItemsLength = createSelector(
  [getIdSelectedItems],
  items => items.length,
);

export const hasSelectedItemById = createSelector(
  [getIdSelectedItems, (state, id) => id],
  (items, id) => {
    return items.some(item => item === id);
  },
);

export const getItemsByPage = createSelector(
  [getItems, getCount, (state, page) => page],
  (items, count, page) => {
    const end = count * page;
    const start = end - count;
    return items.filter((item, index) => index >= start && index < end);
  },
);
export const getSelectedItems = createSelector(
  [getItems, getIdSelectedItems],
  (items, ids) => items.filter(item => ids.some(id => id === item.id)),
);
