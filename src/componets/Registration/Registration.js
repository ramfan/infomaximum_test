import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from "react-router-dom";
import {auth} from "../../Action-Creators/AC";
import {connect} from "react-redux";
import {register as query} from "../../queries";

class Registration extends Component {
componentWillMount(){
    this.props.mutate({
        variables: {
            email: this.props.email,
            password: this.props.password
        }
    }).then(res =>{
        const {auth} = this.props;
        auth(res.data.register.token);
    }).catch(e => {return 'Network Error'});

}

    render() {
    if(this.props.isReady){
        return (<div>{this.props.token.token !== null ? <Redirect to={`/${this.props.token.token}`} />: "Loading"}</div>)
    }

    return(<div>Loading</div>)


    }
}
const queryOption = {
    options: props => {
        return {
            variables: {
                password:  props.password,
                email: props.email
            },
        }
    },
};


Registration = graphql(query, queryOption)(Registration);

export default connect(state => ({
    token: state.auth.tokenHash,
    isReady: state.auth.isReady
}), {auth})(Registration);

