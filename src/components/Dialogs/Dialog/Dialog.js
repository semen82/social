import React from 'react';
import './Dialog.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
  const {name, id, classActive} = props;
  let styleClass = 'dialog';

  if (classActive) {
    styleClass += ' active';
  }

  return (
    <li key={id} className={styleClass}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
};

export default Dialog;