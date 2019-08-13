import axios from 'axios';
import {} from '../redux/actions/auth';
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


// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };


export const fetchAllProducts = (token,input) => {
  return axios.get(api.url.products(input), setToken(token))
  .then(resp => {
    const { productsOptions } = resp.data;
    return productsOptions
  })
  .catch(err=> {console.error(err)});
}

export const fetchProductsByDay = (token, date) => {
  return axios.get(`${api.url.userEats()}/${date}`, setToken(token))
  .then(resp => {
    const { products } = resp.data;
    return products
  })
  .catch(err=> {console.error(err.message)});
}

export const fetchUserEated = (token, productId, weight) => {
  return axios.post(`${api.url.userEats()}/${productId}`, {weight} , setToken(token))
  .then(resp => {
    if(resp.data.status !== "success") {
      throw new Error(resp.data)
    }
    return resp.data.products
  })
  .catch(err=> {console.error(err.message)});
}
