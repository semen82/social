import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

function Dialogs({
  dialogs,
  messages,
  updateMessage,
  newMessageBody,
  sendMess,
}) {
  return (
    <div className="dialogs">
      <ul className="dialogs-list">
        {dialogs.map((item) => {
          let styleClass = "dialog";

          if (item.classActive) {
            styleClass += " active";
          }
          return (
            <li key={item.id} className={styleClass}>
              <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="messages">
        {messages.map((item) => {
          return (
            <li key={item.id} className="message">
              {item.message}
            </li>
          );
        })}
        <div className="add-message">
          <textarea
            placeholder="Сообщение ..."
            onChange={updateMessage}
            value={newMessageBody}
          />

          <button onClick={sendMess}>Отправить</button>
        </div>
      </ul>
    </div>
  );
}

export default Dialogs;
