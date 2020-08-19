import { createKey } from '../components/common/functions/functions';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let defaultState = {
  posts: [
    {
      id: createKey(),
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      likes: 12,
    },
  ],
  newPostText: '',
  profile: {},
  isFetching: false,
};

const profileReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case ADD_POST: {
      let newPostText = newState.newPostText;
      // проверка на пустоту
      if (!newPostText) {
        alert('Невозможно создать пост без текста');
        return state;
      }
      // создаём новый пост
      let newPost = {
        id: createKey(),
        post: newPostText,
        likes: 0,
      };
      // меняем состояние
      newState.posts = [newPost, ...state.posts];
      newState.newPostText = '';

      return newState;
    }
    case UPDATE_NEW_POST_TEXT: {
      newState.newPostText = action.newText;

      return newState;
    }
    case SET_PROFILE: {
      newState.profile = action.profile;

      return newState;
    }
    case TOGGLE_IS_FETCHING: {
      newState.isFetching = action.isFetching;
      return newState;
    }
    default:
      return state;
  }
};

// ... actionCreator
export const addPost = () => {
  return { type: ADD_POST };
};

// ... actionCreator
export const updateNewPost = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

// ... actionCreator
export const setProfile = (profile) => {
  return { type: SET_PROFILE, profile };
};

// ... actionCreator
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export default profileReducer;
