import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
// import AppBar from './components/AppBar';
import ContentSwitcher from './components/ContentSwitcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <ContentSwitcher />
        {/* <AppBar /> */}
      </div>
    );
  }
}

export default App;
