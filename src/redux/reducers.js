import {
  ADD_ITEM,
  UPDATE_ITEM_STATUS,
  DELETE_ITEM,
  ADD_COMMENT,
  SEARCH,
} from './constants';

const initialState = {
  items: [],
  filteredItems: [],
  currentSearch: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { content } = action;
      return {
        ...state,
        items: [...state.items, content],
        filteredItems:
          [...state.items, content].filter((e) => e.searchText.includes(state.currentSearch)),

      };
    }

    case UPDATE_ITEM_STATUS: {
      return {
        ...state,
        items: state.items.map((e) => (
          action.id !== e.id ? e : { ...e, status: action.newStatus })),
        filteredItems: state.items.map((e) => (
          action.id !== e.id ? e : { ...e, status: action.newStatus })),
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((e) => e.id !== action.id),
        filteredItems: state.items.filter((e) => e.id !== action.id
          && e.searchText.includes(state.currentSearch)),
      };
    }

    case SEARCH: {
      return {
        ...state,
        filteredItems: state.items.filter((e) => e.searchText.includes(action.searchTerm)),
        currentSearch: action.searchTerm,
      };
    }

    case ADD_COMMENT: {
      return state;
    }

    default:
      return state;
  }
}
