import React from 'react';
import './Profile.css';
import profileHeader from './profile-header.jpg';

import PostList from './PostList/PostList';
import MyPost from './MyPost/MyPost';
// import avatar from './avatar.jpg';

const Profile = (props) => {
  const { onPostChange, newPostText, posts, addPost, profile } = props;
  return (
    <div id="profile">
      <div className="profile-header">
        <img src={profileHeader} alt="" />
      </div>
      <div className="profile-info">
        <div className="avatar">
          <img src={profile.photos.small} alt="Аватарка" />
        </div>
        <div className="data">
          <div className="name">
            <h3>{profile.fullName}</h3>
          </div>
          <ul className="other-list">
            <li className="list-item">
              <span>В поисках работы: </span>
              {profile.lookingForAJob ? 'Да' : 'Нет'}
            </li>
            <li className="list-item">
              <span>Обо мне: </span>
              {profile.aboutMe}
            </li>
            <li className="list-item contacts">
              <span>Контакты:&nbsp;&nbsp;</span>
              <a href={profile.contacts.facebook}>Facebook</a>
              <a href={profile.contacts.vk}>Vk</a>
              <a href={profile.contacts.twitter}>Twitter</a>
              <a href={profile.contacts.instagram}>Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <MyPost
        newPostText={newPostText}
        onPostChange={onPostChange}
        addPost={addPost}
      />

      <PostList posts={posts} avatar={profile.photos.small} />
    </div>
  );
};

export default Profile;
