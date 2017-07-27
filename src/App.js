import React, {
  Component
} from 'react';
import './App.css';

import Header from './components/Header/header';
import Users from './components/Users/users';

class App extends Component {
  render() {
    return (
      <div className="app-div container-fluid">
        <Header></Header>
        <Users></Users>
      </div>
    );
  }
}

export default App;
