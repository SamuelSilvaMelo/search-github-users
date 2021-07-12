import {
  USER_SEARCH_INPUT,
  USER_SEARCH_REQUEST,
  USER_SEARCH_RECEIVE,
} from '../actions';

const INITIAL_STATE = {
  searchInput: {
    query: '',
    quantity: 5,
  },
  searchBtnDisabled: true,
  isFetching: false,
  data: {
    searchRequested: false,
    total_count: 0,
    items: [],
  }
}

const searchUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_SEARCH_INPUT:
    if(action.value !== '') {
      return {
        ...state,
        searchInput: {
          ...state.searchInput,
          [action.name]: action.value
        },
        searchBtnDisabled: false,
      };
    }
    return {
      ...state,
      searchInput: {
        ...state.searchInput,
        [action.name]: action.value
      },
      searchBtnDisabled: true,
    };
  case USER_SEARCH_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case USER_SEARCH_RECEIVE:
    return {
      ...state,
      isFetching: false,
      data: {
        ...state.data,
        searchRequested: true,
        total_count: action.data.total_count,
        items: action.data.items,
      }
    }
  default:
    return state;
  }
}

export default searchUserReducer;
