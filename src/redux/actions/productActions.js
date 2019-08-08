<<<<<<< HEAD
import { STORE_ADD, ADD_FETCH_SUCCESS } from './constants';

export const addStore = data => ({
  type: STORE_ADD,
  payload: data
});

export const fetchSuccess = data => ({
  type: ADD_FETCH_SUCCESS,
  payload: data
});

// export const asyncCreateNew = (userData, token) => dispatch => {
//   fetch(`https://slim-moms.goit.co.ua/api/v1`, {
//     method: 'POST',
//     body: JSON.stringify(userData),
//     headers: {
//       'content-type': 'application/json',
//       Authorization: token
//     }
//   })
//     .then(response => {
//       response.json().then(data => {
//         dispatch(fetchSuccess(data.result));
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
=======
import {
  TOOGLE_MODAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_PER_DAY,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  TOOGLE_FETCH_ALL_PROD_LOADER
} from './constants';
import { fetchAllProducts, fetchProductsByDay } from '../../utils/requests';

export const toogleModalProductsAction = () => {
  return {
    type: TOOGLE_MODAL_PRODUCTS
  };
};
export const getAllProductsAction = token => dispatch => {
  // ТУГЛИТСЯ ДОЛЖЕН ЛОАДЕР ДЛЯ РЕАКТ СЕЛЕКТ!!
  dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
  fetchAllProducts(token)
    .then(products => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
    });
};

export const getProductsByDayAction = (token, day) => dispatch => {
  dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
  fetchProductsByDay(token, day)
    .then(products => {
      dispatch({
        type: GET_PRODUCTS_PER_DAY,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
    });
};

// export const delProductByDayAction = (token, prodId) => dispatch => {
//   dispatch();
>>>>>>> DiaryBloack/Pasha
// };
