import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

// ... actionCreator
export const setAuthUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } };
};

export const getMe = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        const data = { ...response.data.data };
        dispatch(setAuthUserData(data.id, data.email, data.login));
      }
    });
  };
};

export default authReducer;
