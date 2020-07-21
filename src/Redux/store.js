import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export const createKey = (amount = 8) => {

  const chars = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const len = chars.length;
  let codeArr = [];

  for (let i = 0; i < amount; i++) {
    let index = Math.round(Math.random() * (len - 1));
    codeArr.push(chars[index]);
  }

  return codeArr.join('');
};

// state dataBase
let store = {

  _state: {
    profilePage: {
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
    },
    dataDialog: {
      dialogs: [
        {name: 'Dima', id: 1, active: false},
        {name: 'Sasha', id: 2, active: true},
        {name: 'Sveta', id: 3, active: false},
        {name: 'Kolya', id: 4, active: false},
        {name: 'Katya', id: 5, active: false},
        {name: 'Pavel', id: 6, active: false},
      ]
    },
    dataMessage: {
      messages: [
        {id: 1, message: 'Hi, how are you?', likes: 12},
        {id: 2, message: 'It`s my first post', likes: 11},
        {id: 3, message: 'Tru-la-la', likes: 5},
        {id: 4, message: 'Ku-ku', likes: 9},
      ],
      newMessageBody: '',
    },
  },

  getState() {
    return this._state;
  },


  //...............
  _callSubscriber() {
  },

  //...............
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  // Method ... dispatch
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dataMessage = dialogsReducer(this._state.dataMessage, action);
    this._state.dataDialog = sidebarReducer(this._state.dataDialog, action);

    this._callSubscriber(this._state);
  }
};

export default store;