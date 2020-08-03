import React from 'react';
import './Profile.css';
import profileHeader from './profile-header.jpg';

import PostList from './PostList/PostList';
import NewPost from './NewPost/NewPost';
import Info from "./Info/Info";

function Profile(props) {
  const {posts, newPostText, dispatch} = props;
  return (
    <div id="profile">
      <div className="profile-header">
        <img src={profileHeader} alt=""/>
      </div>

      <Info />

      <NewPost
        dispatch={dispatch}
        newPostText={newPostText}
      />

      <PostList posts={posts} />
    </div>
  );
};

export default Profile;