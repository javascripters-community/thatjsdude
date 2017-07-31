import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import UserContent from './components/UserContent/UserContent';
import HomeContent from './components/HomeContent/HomeContent';
import NotFound from './components/NotFound/NotFound';
import { UserEdit } from './components/UserContent/UserEdit/UserEdit'
import {AddUser }from './components/UserContent/AddUser/AddUser';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AppHeader></AppHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Switch>
                <Route exact path="/" component={HomeContent}></Route>
                <Route path="/usersList" component={UserContent}></Route>
                <Route path="/addUser" component={AddUser}></Route>
                <Route path="/userEdit/:userId" component={UserEdit}></Route>
                <Route path="*" component={NotFound}></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
