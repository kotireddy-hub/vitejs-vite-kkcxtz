export const INITIAL_STATE = {
  loading: true,
  users: [],
  error: null,
};

const USER_ACTIONS = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
};

export const fetchUserAction = () => {
  return {
    type: USER_ACTIONS.FETCH_USER,
  };
};

export const fetchUserSuccess = (users = []) => {
  return {
    type: USER_ACTIONS.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: USER_ACTIONS.FETCH_USER_FAILURE,
    payload: error,
  };
};

export function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.FETCH_USER:
      return INITIAL_STATE;

    case USER_ACTIONS.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: payload,
        error: null,
      };

    case USER_ACTIONS.FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: payload,
      };

    default:
      return state;
  }
}
