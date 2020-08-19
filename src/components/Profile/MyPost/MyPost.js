import React from 'react';
import './MyPost.css';

function MyPosts({ newPostText, addPost, onPostChange }) {
  return (
    <div className="new-post">
      <h3>Создать пост</h3>
      <textarea
        placeholder="Введите текст"
        value={newPostText}
        onChange={onPostChange}
      />

      <button onClick={addPost} type="button">
        Запостить
      </button>
    </div>
  );
}

export default MyPosts;
