import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';
import {
  addPost,
  updateNewPost,
  getProfile,
} from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    const { updateNewPost, newPostText, posts, addPost, profile } = this.props;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        {profile.userId === undefined ? null : (
          <Profile
            updateNewPost={updateNewPost}
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

export default compose(
  connect(mapStateToProps, { updateNewPost, addPost, getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
