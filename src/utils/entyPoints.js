// const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';
// const baseUrl = 'http://localhost:8081/api/v1/';
import * as Axios from 'axios';
const baseURL = 'http://localhost:8081/api/v1/';

const instance = Axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8081/api/v1/',
  headers: {

  },
});


export const url = {
products: ()=> `${baseURL}products/`,
productsByDay:()=>`${baseURL}user/eats/`,
deleteProductsByDay:(id)=>instance.delete(`user/eats/${id}`),
// deleteProductsByDay:(id)=>`${baseURL}user/eats/${id}`
}



