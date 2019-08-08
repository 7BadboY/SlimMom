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
// };
