import React from "react";
import logo from '../../images/logo.png';
/**
  * @Var: AppHeader
  * @Description: This is stateless functional component used to display the header of application
  *
  **/
const AppHeader = () => {
    return (
        <section>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand"><img src={logo} alt="Users" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/usersList">USERSLIST</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    )
}

export default AppHeader;
