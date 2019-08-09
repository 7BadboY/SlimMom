import axios from 'axios';
import {} from '../redux/actions/auth';
import * as api from './entyPoints';
import {url} from './entyPoints';
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

// Example
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

export const deleteProductsByDay = (id) =>{
  return url.deleteProductsByDay(id)
}
