import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-section">
          <img src={logo} alt="logo"/>
        </div>
        <div className="menu-section">
          <ul className="container list-remove-defaults">
            <li><a href="#" className="menu-selected">Shop</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;