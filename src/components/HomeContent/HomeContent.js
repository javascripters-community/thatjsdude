import React from "react";
import logo from '../../images/logo.png';
import AppHeader from '../AppHeader/AppHeader';

const HomeContent = () => {
    return (
        <div id="band" className="text-center">
            <h3>Welcome to User List Application</h3>
            <p><img width="10%" src={logo} alt="Users" /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
        </div>
    )
}

export default HomeContent;
