import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class ProcessetPage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        console.log("PROCESSE", this.props)
        return (
            <div>Processet</div>
        );
    }
}

export default connect(state => {
    return {
    processet: state.getProcesset
}})(ProcessetPage);
