import {
  GET_ALL_PRODUCTS,
  TOOGLE_MODAL_PRODUCTS,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  GET_PRODUCTS_PER_DAY,
  SET_SELECTED_PROD
} from '../actions/constants';
import { products } from '../../components/DiaryBlock/products.json';

const INITIAL_STATE = {
  isModalProductShowed: false,
  allProducts: [],
  isAllProductsLoader: false,
  isProductsByDayLoader: false,
  selectedProduct: {},
  productsByDay: [...products] // УДАЛИТЬ JSON
};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOOGLE_FETCH_PROD_BY_DAY_LOADER:
      return { ...state, isProductsByDayLoader: !state.isProductsByDayLoader };
    case SET_SELECTED_PROD:
      return { ...state, selectedProduct: payload.value };
    case TOOGLE_MODAL_PRODUCTS:
      return { ...state, isModalProductShowed: !state.isModalProductShowed };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...payload] };
    case GET_PRODUCTS_PER_DAY:
      return { ...state, productsByDay: [...payload] };
    default:
      return state;
  }
};
export default productReducer;
