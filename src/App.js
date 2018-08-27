import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { startGetQOTD } from './actions/quotes';

import QOTD from './components/QOTD/QOTD';
import Loader from './components/Loader/Loader';

class App extends Component {

  componentDidMount() {
    this.refreshQuote();
  }

  refreshQuote = () => {
    this.props.getQOTD();
  }

  render() {
    return (
      <div className="home-page-layout">
        <div className="home-page-box">
          {this.props.loading
            ? <Loader />
            : (
              <div>
                <QOTD />
                <button className="refresh_quote_btn" onClick={this.refreshQuote}>Another One!</button>
              </div>
            )}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  loading: state.quotes.loading
});

const mapDispatchToProps = dispatch => ({
  getQOTD: () => dispatch(startGetQOTD())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);