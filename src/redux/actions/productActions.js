import { TOOGLE_MODAL_PRODUCTS, GET_ALL_PRODUCTS, TOOGLE_FETCH_LOADER, GET_PRODUCTS_PER_DAY } from './constants';
import { fetchAllProducts, fetchProductsByDay } from '../../utils/requests';

export const toogleModalProductsAction = () => {
  return {
    type: TOOGLE_MODAL_PRODUCTS
  };
};
export const getAllProductsAction = token => dispatch => {
  // fetch is running
  // fetch
  // err = show err
  dispatch({ type: TOOGLE_FETCH_LOADER });
  fetchAllProducts(token)
    .then(products => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_LOADER });
    });
};

export const getProductsByDayAction = (token, day) => dispatch => {
  dispatch({ type: TOOGLE_FETCH_LOADER });
  fetchProductsByDay(token, day)
    .then(products => {
      dispatch({
        type: GET_PRODUCTS_PER_DAY,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_LOADER });
    });
};
