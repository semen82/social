import React from 'react';
import './Info.css';
import avatar from "./avatar.jpg";

function Info(props) {
  return (
    <div className="profile-info">
      <div className="avatar">
        <img src={avatar} alt="Аватарка"/>
      </div>
      <div className="data">
        <div className="name">
          <h3>Суйчук Семён</h3>
        </div>
        <ul className="other-list">
          <li className="list-item">
            <span>Дата рождения: </span> 22.02.1982
          </li>
          <li className="list-item">
            <span>Город: </span> Кременчуг
          </li>
          <li className="list-item">
            <span>Учился: </span> СШ №2
          </li>
          <li className="list-item">
            <span>Сайт:&nbsp;&nbsp;
              <a
                href="https://webstroyka.com.ua">
                webstroyka.com.ua
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;