import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';
import {
  addPost,
  updateNewPost,
  setProfile,
  toggleIsFetching,
} from '../../Redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router';

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    this.props.toggleIsFetching(true);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then((response) => {
        this.props.setProfile(response.data);
        this.props.toggleIsFetching(false);
      });
  }

  render() {
    const { onPostChange, newPostText, posts, addPost, profile } = this.props;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        {profile.userId === undefined ? null : (
          <Profile
            onPostChange={onPostChange}
            newPostText={newPostText}
            posts={posts}
            addPost={addPost}
            profile={profile}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (event) => {
      const text = event.target.value;
      dispatch(updateNewPost(text));
    },
    addPost: () => {
      dispatch(addPost());
    },
    setProfile: (profile) => {
      dispatch(setProfile(profile));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
};

// const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
