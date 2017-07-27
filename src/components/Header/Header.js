import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo.svg';
import Navmenu from '../Navmenu/navmenu';
class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="lead">This is a react test app</p>
                        <Navmenu></Navmenu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
