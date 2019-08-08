import axios from 'axios';
<<<<<<< HEAD
import { fetchSuccess } from '../redux/actions/productActions';
=======
import {} from '../redux/actions/auth';
>>>>>>> DiaryBloack/Pasha
import * as api from './entyPoints';
import {getAllProducts} from '../redux/actions/productActions'
import store from '../redux/store'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';


export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const pushNewData = (token, task) => {
  return axios
    .post(api.url.newData(), { ...task }, setToken(token))
    .then(response => {
      return response.json().then(data => dispatch(fetchSuccess(data.session)));
    })
    .catch(err => console.log(err));
};

// Example
<<<<<<< HEAD
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };
=======
export const fetchCompleteTask = (token, task) => {
  return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
};



// Получение всех продуктов для днивника
// вызывается в экшене и записывает ответ в стор
export const fetchAllProducts = (token) => {
  return axios.get(api.url.products(), setToken(token))
  .then(resp => {
    const { products } = resp.data;
    return products
  })
  .catch(err=> {console.log(err)});
}

export const fetchProductsByDay = (token, date) => {
  console.log(api.url.productsByDay()+ date);
  return axios.get(api.url.productsByDay()+ date, setToken(token))
  .then(resp => {
    const { products } = resp.data;
    return products
  })
  .catch(err=> {console.log(err.message)});
}
>>>>>>> DiaryBloack/Pasha
