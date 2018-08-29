import React, { Component } from 'react';
import { connect } from 'react-redux';
import './QOTD.css';

class QOTD extends Component {

    render() {

        const quoteBox = this.props.error
            ? (<h3>Unable to fetch data, try again..</h3>)
            : (
                <div>
                    <h1 className="quote_body">"{this.props.qotd.body}"</h1>
                    <p className="quote_author">- {this.props.qotd.author}</p>
                </div>
            )

        return (
            <div>
                {quoteBox}
            </div>
        );
    }

};

const mapStateToProps = state => ({
    qotd: state.quotes.qotd,
    error: state.quotes.error
});

export default connect(mapStateToProps)(QOTD);