import React, { Component } from 'react';
import './App.css';
import Logo from './images/spaceX-Logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Logo} alt="SpaceX" style={{ width : 300, display : 'block', margin : 'auto' }}/>
      </div>
    );
  }
}

export default App;
