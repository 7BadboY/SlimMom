import { TOOGLE_MODAL_PRODUCTS, GET_ALL_PRODUCTS, TOOGLE_FETCH_LOADER } from './constants';
import { fetchAllProducts } from '../../utils/requests';

export const handlerToogleModalProducts = () => {
  return {
    type: TOOGLE_MODAL_PRODUCTS
  };
};
export const getAllProducts = token => dispatch => {
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
