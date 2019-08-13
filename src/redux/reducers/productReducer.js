import {
  GET_ALL_PRODUCTS,
  SHOW_MODAL_PRODUCTS,
  CLOSE_MODAL_PRODUCTS,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  GET_PRODUCTS_PER_DAY,
  ADD_PRODUCT_BY_DAY,
  FETCH_ERROR
} from '../actions/constants';

const INITIAL_STATE = {
  isModalProductShowed: false,
  allProducts: [],
  isProductsByDayLoader: false,
  selectedProduct: {},
  productsByDay: []
};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOOGLE_FETCH_PROD_BY_DAY_LOADER:
      return { ...state, isProductsByDayLoader: !state.isProductsByDayLoader };
    case ADD_PRODUCT_BY_DAY:
      return { ...state, productsByDay: [...state.productsByDay, payload] };
    case SHOW_MODAL_PRODUCTS:
      return { ...state, isModalProductShowed: true };
    case CLOSE_MODAL_PRODUCTS:
      return { ...state, isModalProductShowed: false };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...state.allProducts, ...payload] };
    case GET_PRODUCTS_PER_DAY:
      return { ...state, productsByDay: [...payload] };
    case FETCH_ERROR:
      return { ...state }; // Надо придумать что делать при фетч ероре. Всплывашку там какую то показать или типа того...
    default:
      return state;
  }
};
export default productReducer;
