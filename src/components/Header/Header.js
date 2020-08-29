import React from 'react';
import logo from './images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header({ login, isAuth }) {
  return (
    <div className="container">
      <header id="header">
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>
        <div className="login-block">
          <NavLink to="/login">{!isAuth ? 'Login' : login}</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
