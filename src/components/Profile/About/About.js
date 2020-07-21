import React from 'react';
import avatar from './avatar.jpg';
import './About.css';

function Post() {
  return (
    <div className="profile-about">
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
                href="webstroyka.com.ua"
                target="_blank">
                webstroyka.com.ua
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;