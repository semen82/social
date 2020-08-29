import React, { Component } from 'react';
import './Header.css';
import Header from './Header';
import { connect } from 'react-redux';
import { getMe } from '../../Redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.authPage.login,
    isAuth: state.authPage.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => {
      dispatch(getMe());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
