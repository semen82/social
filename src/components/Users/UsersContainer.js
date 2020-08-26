import './Users.css';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
} from '../../Redux/users-reducer';
import * as axios from 'axios';
import React, { Component } from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  };

  onPrevPage = () => {
    let page = this.props.currentPage > 1 ? this.props.currentPage - 1 : 1;
    this.onPageChanged(page);
  };
  onNextPage = () => {
    let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let page =
      this.props.currentPage < pages
        ? this.props.currentPage + 1
        : this.props.currentPage;
    this.onPageChanged(page);
  };

  createArrayForPages = (userCount, pageSize) => {
    let arr = [];
    let pages = Math.ceil(userCount / pageSize);
    for (let i = 1; i <= pages; i++) {
      arr[i - 1] = i;
    }
    return arr;
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPrevPage={this.onPrevPage}
          onNextPage={this.onNextPage}
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
  };
};

const dispatches = {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
};

export default connect(mapStateToProps, dispatches)(UsersContainer);
