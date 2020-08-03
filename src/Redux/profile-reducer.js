import {createKey} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let defaultState= {
  posts: [
    {
      id: createKey(),
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      likes: 12
    },
    {
      id: createKey(),
      post: 'Lorem ipsum dolor sit amet, ctetur adipisicing elit.',
      likes: 34
    },
  ],
  newPostText: '',
}

const profileReducer = (state = defaultState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPostText = state.newPostText;
      if (!newPostText) {
        alert('Невозможно создать пост без текста');
        return false;
      }

      let newPost = {
        id: createKey(),
        post: newPostText,
        likes: 0
      };

      state.posts.push(newPost);
      state.newPostText = '';

      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;

      return state;
    }
    default:
      return state;
  }
};

// ... creator
export const addPostActionCreator = () => {
  return {type: ADD_POST};
};

// ... creator
export const updateNewPostActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text};
};

export default profileReducer;