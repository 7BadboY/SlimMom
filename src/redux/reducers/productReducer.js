import {
  GET_ALL_PRODUCTS,
  TOOGLE_MODAL_PRODUCTS,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  GET_PRODUCTS_PER_DAY,
  DELETE_PRODUCT_FROM_PRODUCTLIST
} from '../actions/constants';
// import { products } from '../../components/DiaryBlock/products.json';

const INITIAL_STATE = {
  isModalProduct: false,
  allProducts: [],
  isAllProductsLoader: false,
  isProductsByDayLoader: false,
  productsByDay: [
    {
      title: {
        ru: 'Меланж яичный',
        ua: 'Меланж яєчний'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4233',
      calories: 157,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.161Z',
      updatedAt: '2019-08-04T18:33:01.162Z'
    },
    {
      title: {
        ru: 'Омлет',
        ua: 'Ямлет'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4234',
      calories: 184,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.163Z',
      updatedAt: '2019-08-04T18:33:01.163Z'
    },
    {
      title: {
        ru: 'Омлет из взбитых сливок',
        ua: 'Омлет зі збитих вершків'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4235',
      calories: 257,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.163Z',
      updatedAt: '2019-08-04T18:33:01.163Z'
    },
    {
      title: {
        ru: 'Омлет из яичного порошка',
        ua: 'Омлет з яєчного порошку'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4236',
      calories: 200,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.163Z',
      updatedAt: '2019-08-04T18:33:01.163Z'
    },
    {
      title: {
        ru: 'Омлет с сыром',
        ua: 'Омлет із сиром'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4237',
      calories: 342,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.163Z',
      updatedAt: '2019-08-04T18:33:01.163Z'
    },
    {
      title: {
        ru: 'Яичница глазунья',
        ua: 'Яєчня глазунья'
      },
      categories: ['яйца'],
      weight: 100,
      _id: '5d4724dcac81f92de0fd4238',
      calories: 215,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': false,
        '4': false
      },
      __v: 0,
      createdAt: '2019-08-04T18:33:01.163Z',
      updatedAt: '2019-08-04T18:33:01.163Z'
    }
  ]
  // productsByDay: [...products] // УДАЛИТЬ JSON
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_FETCH_PROD_BY_DAY_LOADER:
      return { ...state, isProductsByDayLoader: !state.isProductsByDayLoader };
    case TOOGLE_MODAL_PRODUCTS:
      return { ...state, isModalProduct: !state.isModalProduct };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...action.payload] };
    case GET_PRODUCTS_PER_DAY:
      return { ...state, productsByDay: [...action.payload] };
    case DELETE_PRODUCT_FROM_PRODUCTLIST: {
      const newProduct = state.productsByDay.filter(prod => prod._id !== action.id);
      console.log(newProduct);
      return { ...state, productsByDay: newProduct };
    }

    default:
      return state;
  }
};
export default productReducer;

// return {
//   ...state,
//   productsByDay: state.productsByDay.filter(prod => {
//     if (prod._id !== action.id) {
//       console.log(prod);
//       return { ...prod };
//     }
//     return prod;
//   })
// };
