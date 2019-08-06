import { SOME_CONST, ANOTHER_CONST } from '../actions/constants';

const INITIAL_STATE = {};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SOME_CONST:
      return { payload };
    case ANOTHER_CONST:
      return { payload };
    default:
      return state;
  }
};
export default productReducer;
