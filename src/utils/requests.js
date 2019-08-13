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

export const fetchLogOut = token => {
  return axios
    .get(api.url.logOut(), setToken(token))
    .then(resp => {
      console.log(data);
      if (resp.data.status !== 'success') {
        throw new Error('albfkjabflasflk');
      }
    })
    .catch(error => console.log(error));
};

// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };
