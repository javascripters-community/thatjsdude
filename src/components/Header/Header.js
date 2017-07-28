import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="App-header">
                    <h2>Welcome to My Hotels</h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;