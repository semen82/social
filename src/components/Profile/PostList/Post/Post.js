import React from 'react';
import avatar from './avatar.jpg';
import './Post.css';

function Post(props) {
  const {post} = props;
  return (
    <li className="post">
      <div className="avatar">
        <img src={avatar} alt="Аватарка"/>
      </div>
      <div className="message">
        <span>{post}</span>
      </div>
    </li>
  );
}

export default Post;