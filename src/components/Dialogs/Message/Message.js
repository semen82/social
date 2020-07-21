import React from 'react';
import './Message.css';

function Message(props) {
  return (
    <li className="message">{props.message}</li>
  );
};

export default Message;