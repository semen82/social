import React from 'react';
import './NewPost.css';
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../Redux/profile-reducer";

function NewPost(props) {
  const {
    // data
    newPostText,
    // methods
    dispatch
  } = props;
  const refText = React.createRef();

  const createPost = () => {
    dispatch(addPostActionCreator());
  };

  const postChange = () => {
    let text = refText.current.value;
    dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className="new-post">
      <h3>Создать пост</h3>
      <textarea
        ref={refText}
        placeholder="Введите текст"
        value={newPostText}
        onChange={postChange}
      />

      <button
        onClick={createPost}
        type="button"
      >Запостить</button>
    </div>
  );
};

export default NewPost;