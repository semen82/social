import React from 'react';
import './PostList.css';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';

function PostList(props) {
  const { posts, avatar } = props;
  return (
    <ul className="posts">
      {posts.map((item) => {
        return (
          <li className="post" key={item.id}>
            <div className="avatar">
              <img src={avatar || defaultAvatar} alt="Аватарка" />
            </div>
            <div className="message">
              <span>{item.post}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
