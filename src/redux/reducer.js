import { combineReducers } from 'redux';
import sessionReducer from './reducers/session';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  dailyBlock: productReducer
});

export default rootReducer;

// Store example
// const session = {
//   user: {
//     groupBlood: 1,
//     nickname: 'name',
//     dailyRate: 3000
//   },
//   token: '123'
// };

<<<<<<< HEAD
const products = {
  date: '25.06.2019',
  items: [
    {
      id: '123',
      title: 'some meal',
      ccal: 4000,
      weight: 960,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': true,
        '4': false
      }
    }
  ]
};
=======
// const products = {
//   date: 'date',
//   items: [
//     {
//       id: '123',
//       title: 'some meal',
//       ccal: 4000,
//       weight: 960,
//       groupBloodNotAllowed: {
//         '1': true,
//         '2': false,
//         '3': true,
//         '4': false
//       }
//     }
//   ]
// };
>>>>>>> DiaryBloack/Pasha
