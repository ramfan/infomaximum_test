import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import {logginig} from "../../queries";

class Authorization extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div></div>
        );
    }
}
Authorization = graphql(logginig)(Authorization)
export default Authorization;
