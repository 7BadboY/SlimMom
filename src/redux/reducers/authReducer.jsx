import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: 'Test',
  password: '12345'
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQ: {
      return { ...state, nickname: action.nickname, password: action.password };
    }
    default:
      return state;
  }
};
export default authReducer;
