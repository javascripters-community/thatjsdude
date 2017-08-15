import React, { Component } from 'react';
import './App.css';

//import component
import Header from './components/Header/Header';
import HotelLists from './components/HotelLists/HotelLists';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <HotelLists></HotelLists>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
