import {
  USER_DATA_REQUEST,
  USER_DATA_RECEIVE,
  USER_REPOSITORIES_REQUEST,
  USER_REPOSITORIES_RECEIVE,
} from '../actions';

const INITIAL_STATE = {
  userData: {
    data: {},
    isFetching: false,
  },
  userRepositories: {
    data: [],
    isFetchingRepositories: false,
  }
}

const userInformationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_DATA_REQUEST:
    return {
      ...state,
      userData: {
        ...state.userData,
        isFetching: true,
      },
    };
  case USER_DATA_RECEIVE:
    return {
      ...state,
      userData: {
        data: { ...action.data },
        isFetching: false,
      },
    };
  case USER_REPOSITORIES_REQUEST:
    return {
      ...state,
      userRepositories: {
        ...state.userRepositories,
        isFetchingRepositories: true,
      },
    };
  case USER_REPOSITORIES_RECEIVE:
    return {
      ...state,
      userRepositories: {
        data: Object.values(action.data),
        isFetchingRepositories: false,
      },
    }
  default:
    return state;
  }
}

export default userInformationsReducer;
