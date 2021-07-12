import {
  requestSearchList,
  requestUserData,
  requestRepositories,
} from '../../services/requestGitHubAPI';

export const USER_SEARCH_INPUT = 'USER_SEARCH_INPUT';
export const USER_SEARCH_REQUEST = 'USER_SEARCH_REQUEST';
export const USER_SEARCH_RECEIVE = 'USER_SEARCH_RECEIVE';
export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_RECEIVE = 'USER_DATA_RECEIVE';
export const USER_REPOSITORIES_REQUEST = 'USER_REPOSITORIES_REQUEST';
export const USER_REPOSITORIES_RECEIVE = 'USER_REPOSITORIES_RECEIVE';

export const searchUserInput = (target) => {
  const { name, value } = target;
  return {
    type: USER_SEARCH_INPUT,
    name,
    value,
  }
}

export const userSearchRequested = () => ({
  type: USER_SEARCH_REQUEST,
});

export const userSearchReceived = (data) => ({
  type: USER_SEARCH_RECEIVE,
  data,
});

export const requestUsersInformations = (userName, quantity) => (dispatch) => {
  dispatch(userSearchRequested())
  return (
    requestSearchList(userName, quantity)
      .then((data) => dispatch(userSearchReceived(data, quantity)))
  );
};

export const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});

export const userDataReceive = (data) => ({
  type: USER_DATA_RECEIVE,
  data,
});

export const requestUserInformations = (userLogin) => (dispatch) => {
  dispatch(userDataRequest());
  return (
    requestUserData(userLogin)
      .then((data) => (
        dispatch(userDataReceive(data))
      ))
  );
}

export const userRepositoriesRequest = () => ({
  type: USER_REPOSITORIES_REQUEST,
});

export const userRepositoriesReceive = (data) => ({
  type: USER_REPOSITORIES_RECEIVE,
  data,
});

export const requestUserRepositories = (userLogin) => (dispatch) => {
  dispatch(userRepositoriesRequest());
  return(
    requestRepositories(userLogin)
      .then((data) => (
        dispatch(userRepositoriesReceive(data))
      ))
  );
}
