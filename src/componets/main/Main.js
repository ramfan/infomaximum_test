import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from "react-router-dom";
import {auth} from "../../Action-Creators/AC";
import {connect} from "react-redux";

const query = gql`mutation MUatation($email: String!, $password: String!){
  register(email: $email, password: $password, expiresIn: "24h") {
    token
  }
}`;

class Main extends Component {


    render() {
         this.props.mutate({
            variables: {
                email: this.props.email,
                password: this.props.password
            }
        }).then(res =>{
            const {auth} = this.props;
            auth(res.data.register.token);
        }).catch(e => {return 'Network Error'});
        if(this.props.token.token !== null) {
            const {token} = this.props.token
            return (<Redirect to={`/${token}`} />)
        }else {
            return(<div>Loading</div>)
        }



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
Main = graphql(query, queryOption)(Main);

export default connect(state => ({
    token: state.auth.tokenHash === null? "Error":state.auth.tokenHash
}), {auth})(Main);

