import './Users.css';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, follow, unfollow } from '../../Redux/users-reducer';
import React, { Component } from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  onPrevPage = () => {
    let page = this.props.currentPage > 1 ? this.props.currentPage - 1 : 1;
    this.onPageChanged(page);
  };
  onNextPage = () => {
    let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let page =
      this.props.currentPage < pages
        ? +this.props.currentPage + 1
        : this.props.currentPage;
    this.onPageChanged(page);
  };

  setPagesPagination = (currentPage) => {
    if (currentPage <= 1) {
      return [
        { id: currentPage, page: currentPage, styleClass: 'active' },
        { id: currentPage + 1, page: currentPage + 1 },
      ];
    } else if (currentPage === this.props.countPages) {
      return [
        { id: currentPage - 1, page: currentPage - 1 },
        { id: currentPage, page: currentPage, styleClass: 'active' },
      ];
    } else {
      return [
        { id: currentPage - 1, page: currentPage - 1 },
        { id: currentPage, page: currentPage, styleClass: 'active' },
        { id: currentPage + 1, page: currentPage + 1 },
      ];
    }
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          pagesPagination={this.setPagesPagination(this.props.currentPage)}
          users={this.props.users}
          onPrevPage={this.onPrevPage}
          onNextPage={this.onNextPage}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    countPages: state.usersPage.countPages,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (currentPage, pageSize) => {
      dispatch(getUsers(currentPage, pageSize));
    },
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);
