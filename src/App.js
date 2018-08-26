import React, { Component } from 'react';
import './App.css';

import QOTD from './components/QOTD';

class App extends Component {
  render() {
    return (
      <div className="home-page-layout">
        <div className="home-page-box">
          <div className="header">
            <h1>Quote</h1>
            <p>of the day</p>
          </div>
          <QOTD />
        </div>
      </div>
    );
  }
}

export default App;