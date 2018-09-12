import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from "react-redux";
import store from "../store/store";
import Root from "./Root";

class HighLevelComponent extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}

export default HighLevelComponent;
