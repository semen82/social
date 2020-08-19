// import { createKey } from "../functions";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  // колличество загружаемых пользователей за раз
  pageSize: 5,
  // колличество пользователей всего в базе
  totalUsersCount: 19,
  // текущая страница
  currentPage: 1,
  // прелоадер
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };
    // return { ...state, users: [...state.users, ...action.users] };

    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

// ... actionCreator
export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

// ... actionCreator
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

// ... actionCreator
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};

// ... actionCreator
export const setTotalCount = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};

// ... actionCreator
export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, page };
};

// ... actionCreator
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export default usersReducer;
