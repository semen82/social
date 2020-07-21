import React from 'react';
import logo from './images/logo.png';
import './Header.css';

function Header() {
    return (
        <div className="container">
            <header id="header">
                <div className="logo">
                    <img src={logo} alt="Логотип" />
                </div>
            </header>
        </div>
    );
};

export default Header;