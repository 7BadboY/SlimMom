const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';
// const baseUrl = 'http://localhost:8081/api/v1/';


export const url = {
products: (input)=> `${baseUrl}products?search=${input}`,
userEats:()=>`${baseUrl}user/eats`,
};
