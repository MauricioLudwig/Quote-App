import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGetQOTD } from '../actions/quotes';

class QOTD extends Component {

    componentDidMount() {
        this.props.getQOTD();
    }

    render() {

        console.log(this.props.qotd);

        return (
            <div>Hello</div>
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