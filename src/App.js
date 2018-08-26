import React, { Component } from 'react';
import './App.css';

import QOTD from './components/QOTD';

class App extends Component {

  render() {
    return (
      <div className="home-page-layout">
        <div className="home-page-box">
          <QOTD />
        </div>
      </div>
    );
  }

}

export default App;