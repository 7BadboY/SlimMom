import { actionTypes } from './constants';
import { requestUserRegister, requestUserLogin } from '../../utils/requests';
import { dispatch } from 'rxjs/internal/observable/range';

// registr
export const registerRequestAC = (nickname, password) => ({
  type: actionTypes.REGISTER_REQ,
  nickname: nickname,
  password: password
});

export const registerSuccess = () => ({
  type: actionTypes.REGISTER_SUC
});

export const registerError = () => ({
  type: actionTypes.REGISTER_ERR
});

// login
export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQ
});

export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUC
});

export const loginrError = () => ({
  type: actionTypes.LOGIN_ERR
});

// logout
export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUC
});

// variables
export const addUserFromStorage = (data, token) => ({
  type: actionTypes.ADD_USER_FROM_LS,
  payload: {
    user: data,
    token
  }
});

export const userRegister = credentials => dispatch => {
  dispatch(registerRequest());
  return requestUserRegister(credentials)
    .then(data => {
      dispatch(registerSuccess(data));
    })
    .catch(error => dispatch(registerError(error)));
};

export const userLogin = credentials => dispatch => {
  dispatch(loginRequest());
  return requestUserLogin(credentials)
    .then(data => {
      if (data.status === 200) {
        const { token } = data.data;
        const user = JSON.stringify(data.data.user);
        localStorage.setItem('user', user);
        localStorage.setItem('userToken', token);

        dispatch(loginSuccess(data));
      }

      if (data.status >= 400) {
        return false;
      }
    })
    .catch(error => dispatch(loginrError(error)));
};
