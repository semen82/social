import {createKey} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let defaultState= {
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
};

const dialogReducer = (state = defaultState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      state.dataMessage.newMessageBody = action.newText;

      return state;
    }
    case SEND_MESSAGE: {
      let newMessageText = state.dataMessage.newMessageBody;

      if (!newMessageText) {
        alert('Невозможно создать пост без текста');
        return false;
      }

      let newMessage = {
        id: createKey(),
        message: newMessageText,
        likes: 0
      };
      state.dataMessage.newMessageBody = '';
      state.dataMessage.messages.push(newMessage);

      return state;
    }
    default:
      return state;
  }
};

// ... creator
export const updateNewMessageActionCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, newText: body};
};

// ... creator
export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export default dialogReducer;