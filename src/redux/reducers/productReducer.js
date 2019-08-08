import {
  GET_ALL_PRODUCTS,
  TOOGLE_MODAL_PRODUCTS,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  GET_PRODUCTS_PER_DAY
} from '../actions/constants';
import { products } from '../../components/DiaryBlock/products.json';

const INITIAL_STATE = {
  isModalProduct: false,
  allProducts: [],
  isAllProductsLoader: false,
  isProductsByDayLoader: false,
  productsByDay: [...products] // УДАЛИТЬ JSON
};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOOGLE_FETCH_PROD_BY_DAY_LOADER:
      return { ...state, isProductsByDayLoader: !state.isProductsByDayLoader };
    case TOOGLE_MODAL_PRODUCTS:
      return { ...state, isModalProduct: !state.isModalProduct };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...payload] };
    case GET_PRODUCTS_PER_DAY:
      return { ...state, productsByDay: [...payload] };
    default:
      return state;
  }
};
export default productReducer;
