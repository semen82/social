import React from 'react';
import './PostList.css';
import Post from './Post/Post';

function PostList(props) {
  const {posts} = props;
  return (
    <ul className="posts">
      {
        posts.map(item => {
          return <Post key={item.id} post={item.post} />
        })
      }
    </ul>
  );
};

export default PostList;