import React, { Component } from 'react';
import { connect } from 'react-redux';
import './QOTD.css';

class QOTD extends Component {

    render() {
        return (
            <div>
                <h1 className="quote_body">"{this.props.qotd.body}"</h1>
                <p className="quote_author">{this.props.qotd.author}</p>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    qotd: state.quotes.qotd
});

export default connect(mapStateToProps)(QOTD);