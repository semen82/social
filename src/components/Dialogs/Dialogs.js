import React from 'react';
import './Dialogs.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator
} from "../../Redux/dialogs-reducer";
import {createKey} from "../../Redux/store";

function Dialogs(props) {
  const {dataDialog, dataMessage, dispatch} = props;

  const linkTextarea = React.createRef();

  const updateMessage = () => {
    let text = linkTextarea.current.value;
    dispatch(updateNewMessageActionCreator(text));
  }

  const sendMess = () => {
    dispatch(sendMessageActionCreator());
  }

  return (
    <div className="dialogs">
      <ul className="dialogs-list">
        {
          dataDialog.dialogs.map(item => {
            return <Dialog key={createKey()}
                           name={item.name}
                           id={item.id}
                           classActive={item.active}/>
          })
        }
      </ul>
      <ul className="messages">
        {
          dataMessage.messages.map(item => {
            return <Message key={createKey()} message={item.message}/>
          })
        }
        <div className="add-message">
          <textarea ref={linkTextarea}
                    placeholder="Сообщение ..."
                    onChange={updateMessage}
                    value={dataMessage.newMessageBody}
          />

          <button onClick={sendMess}>Отправить</button>
        </div>
      </ul>
    </div>
  );
}

export default Dialogs;