import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';


function NavBar() {
    return (
        <nav id="nav-bar">
            <ul className="menu-list">
                <li className="list-item">
                    <NavLink to="/">Profile</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/dialogs">Message</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/music">Music</NavLink>
                </li>
            </ul>
            <div id="settings">
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;