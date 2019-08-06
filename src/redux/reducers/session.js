const INITIAL_STATE = {
  user: {
    groupBlood: 1,
    nickname: 'name',
    dailyRate: 3000
  },
  token: '123'
};;

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case STORE_ADD:
      return { ...state, user: payload };
    case ADD_FETCH_SUCCESS:
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default sessionReducer;
