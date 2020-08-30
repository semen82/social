import { createKey } from '../components/common/functions/functions';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let defaultState = {
  dataDialog: {
    dialogs: [
      { name: 'Dima', id: createKey(), active: false },
      { name: 'Sasha', id: createKey(), active: true },
      { name: 'Sveta', id: createKey(), active: false },
      { name: 'Kolya', id: createKey(), active: false },
      { name: 'Katya', id: createKey(), active: false },
      { name: 'Pavel', id: createKey(), active: false },
    ],
  },
  dataMessage: {
    messages: [{ id: createKey(), message: 'Hi, how are you?', likes: 12 }],
    newMessageBody: '',
  },
};

const dialogReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      newState.dataMessage.newMessageBody = action.newText;

      return newState;
    }
    case SEND_MESSAGE: {
      let newMessageText = newState.dataMessage.newMessageBody;

      if (!newMessageText) {
        alert('Невозможно создать пост без текста');
        return state;
      }
      // новое сообщение
      let newMessage = {
        id: createKey(),
        message: newMessageText,
        likes: 0,
      };

      newState.dataMessage.newMessageBody = '';
      newState.dataMessage.messages = [
        ...state.dataMessage.messages,
        newMessage,
      ];

      return newState;
    }
    default:
      return newState;
  }
};

// ... creator
export const updateNewMessage = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newText: body };
};

// ... creator
export const sendMessage = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default dialogReducer;
