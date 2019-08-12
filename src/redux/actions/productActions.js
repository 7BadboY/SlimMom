import {
  SHOW_MODAL_PRODUCTS,
  CLOSE_MODAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_PER_DAY,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  ADD_PRODUCT_BY_DAY,
  FETCH_ERROR
} from './constants';
import { fetchAllProducts, fetchProductsByDay, fetchUserEated } from '../../utils/requests';

export const showModalProductsAction = () => {
  return {
    type: SHOW_MODAL_PRODUCTS
  };
};

export const closeModalProductsAction = () => {
  return {
    type: CLOSE_MODAL_PRODUCTS
  };
};

export const getAllProductsAction = token => dispatch => {
  // ТУГЛИТСЯ ДОЛЖЕН ЛОАДЕР ДЛЯ РЕАКТ СЕЛЕКТ!!
  fetchAllProducts(token)
    .then(products => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err
      });
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
        type: FETCH_ERROR,
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
    });
};

export const addProductByDayAction = (token, productId, weight) => dispatch => {
  fetchUserEated(token, productId, weight)
    .then(products => {
      dispatch({
        type: ADD_PRODUCT_BY_DAY,
        payload: products
      });
      dispatch({
        type: CLOSE_MODAL_PRODUCTS
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err
      });
    });
};
