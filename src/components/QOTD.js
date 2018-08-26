import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGetQOTD } from '../actions/quotes';

class QOTD extends Component {

    componentDidMount() {
        this.refreshQuote();
    }

    refreshQuote = () => {
        this.props.getQOTD();
    }

    render() {
        return (
            <div>
                <h1 className="quote_body">"{this.props.qotd.body}"</h1>
                <p className="quote_author">{this.props.qotd.author}</p>
                <button onClick={this.refreshQuote}>Refresh</button>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    qotd: state.quotes.qotd
});

const mapDispatchToProps = dispatch => ({
    getQOTD: () => dispatch(startGetQOTD())
});

export default connect(mapStateToProps, mapDispatchToProps)(QOTD);