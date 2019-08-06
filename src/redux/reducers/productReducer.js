import { GET_ALL_PRODUCTS, TOOGLE_MODAL_PRODUCTS, TOOGLE_FETCH_LOADER } from '../actions/constants';

const INITIAL_STATE = {
  isModalProduct: false,
  allProducts: [],
  isFetchLoader: false
};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOOGLE_FETCH_LOADER:
      return { ...state, isFetchLoader: !state.isFetchLoader };
    case TOOGLE_MODAL_PRODUCTS:
      return { ...state, isModalProduct: !state.isModalProduct };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...payload] };
    case `asome`:
      return payload;
    default:
      return state;
  }
};
export default productReducer;
