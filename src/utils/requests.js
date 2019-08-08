import axios from 'axios';
import {} from '../redux/actions/auth';
import * as api from './entyPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export const login = user => {
  return axios
    .post('/login', {
      nickname: user.nickname,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const register = newUser => {
  return axios
    .post('/register', {
      nickname: newUser.nickname,
      password: newUser.password
    })
    .then(res => {
      console.log('registered');
    });
};
// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };
