import { v4 } from 'uuid';

import {
  ADD_ITEM,
  UPDATE_ITEM_STATUS,
  DELETE_ITEM,
  SEARCH,
  ADD_COMMENT,
} from './constants';

export const addItem = (content) => ({
  type: ADD_ITEM,
  content: {
    ...content,
    id: v4(),
    status: 0,
    searchText: JSON.stringify(Object.values(content)).toLowerCase(),
  },
});

export const updateItemStatus = (id, newStatus) => ({
  type: UPDATE_ITEM_STATUS,
  id,
  newStatus,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const search = (searchTerm) => ({
  type: SEARCH,
  searchTerm: searchTerm.toLowerCase(),
});

export const addComment = (id, comment) => ({
  type: ADD_COMMENT,
  id,
  comment,
});
