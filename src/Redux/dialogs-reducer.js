import {createKey} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.newText;

      return state;
    }
    case SEND_MESSAGE: {
      let newMessageText = state.newMessageBody;

      if (!newMessageText) {
        alert('Невозможно создать пост без текста');
        return false;
      }

      let newMessage = {
        id: createKey(),
        message: newMessageText,
        likes: 0
      };
      state.newMessageBody = '';
      state.messages.push(newMessage);

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

export default dialogsReducer;