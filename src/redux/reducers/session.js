import { actionTypes } from '../actions/constants';
const INITIAL_STATE = {
  user: {
    id: '',
    nickname: '',
    password: ''
  },
  token: '',
  isAuthenticated: false
};

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_SUC:
    case actionTypes.ADD_USER_FROM_LS:
      return {
        ...state,
        user: {
          ...payload.user
        },
        token: payload.token,
        isAuthenticated: true
      };
    case actionTypes.LOGOUT_SUC:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

export default sessionReducer;
