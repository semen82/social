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
        // console.log(response.data);
        // this.props.setTotalCount(response.data.totalCount);
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
        // console.log(response.data);
        // this.props.setTotalCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  };

  onPrevPage = () => {
    console.log('prev');
  };
  onNextPage = () => {
    console.log('next');
  };

  createArrayForPages = (userCount, pageSize) => {
    let arr = [];
    let pages = Math.ceil(userCount / pageSize);
    for (let i = 1; i <= pages; i++) {
      arr[i - 1] = i;
    }
    return arr;
  };

  render() {
    const pages = this.createArrayForPages(
      this.props.totalUsersCount,
      this.props.pageSize
    );
    console.log(pages);

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          pages={pages}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onPrevPage={this.props.onPrevPage}
          onNextPage={this.props.onNextPage}
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
