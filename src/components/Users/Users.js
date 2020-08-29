import React from 'react';
import './Users.css';
import userAvatar from '../../../src/assets/images/User_Avatar_2.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const {
    users,
    follow,
    unfollow,
    onPrevPage,
    onNextPage,
    pagesPagination,
    followingInProgress,
  } = props;

  return (
    <div id="users">
      <h1>Пользователи</h1>
      <div className="pagination">
        <span className="prev" onClick={onPrevPage}>
          Назад
        </span>
        <div className="nums">
          {pagesPagination.map((item) => {
            return (
              <span key={item.id} className={item.styleClass}>
                {item.page}
              </span>
            );
          })}
        </div>
        <span className="next" onClick={onNextPage}>
          Вперёд
        </span>
      </div>
      {users.map((user) => {
        return (
          <div className="user" key={user.id}>
            <div className="left">
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={user.photos.small ? user.photos.small : userAvatar}
                  alt="avatar"
                />
              </NavLink>

              {/* Кнопка подписки */}
              {user.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  className="follow"
                  onClick={() => unfollow(user.id)}
                >
                  Отписатся
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  className="follow"
                  onClick={() => follow(user.id)}
                >
                  Подписатся
                </button>
              )}
              {/* Кнопка подписки. Конец */}
            </div>
            <div className="right">
              <section>
                <div className="full-name">{user.name}</div>
                <div className="location">Украина: Киев</div>
              </section>
              <section>
                <hr />
                <div className="description">{'user.status'}</div>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
