import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';
import Home from './components/Home';
import Page404 from './components/Page404';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Router>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/user-list" component={UserList}></Route>
                  <Route path="/user/:id" component={SingleUser}></Route>
                  <Route path="*" component={Page404}></Route>
              </Switch>
            </Router>
          </div>
        );
    }
}

export default App;