import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
