const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';


// const baseUrl = 'http://localhost:8081/api/v1/';
// import * as Axios from 'axios';
// const baseURL = 'http://localhost:8081/api/v1/';

// const instance = Axios.create({
//   baseURL: 'https://slim-moms.goit.co.ua/api/v1/',
// });


// export const url = {
// products: ()=> `${baseURL}products/`,
// productsByDay:()=>`${baseURL}user/eats/`,
// deleteProductsByDay:(id)=>instance.delete(`user/eats/${id}`),
// }



export const url = {
  products: ()=> `${baseUrl}products/`,
  productsByDay:()=>`${baseUrl}user/eats/`,
  deleteProductsByDay:()=>`${baseUrl}user/eats/`
  }

