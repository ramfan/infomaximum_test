import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`mutation MUatation($email: String!, $password: String!){
  register(email: $email, password: $password, expiresIn: "24h") {
    token
  }
}`;

class Main extends Component {
    render() {
        // console.log("MUT",this.props)
        // .then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log('Network error!')
        //     setTimeout(() => {
        //         reject(new Error("время вышло!"));
        //     }, 1000);
        // })


            this.props.mutate({
                variables: {
                    email: this.props.email,
                    password: this.props.password
                }
            }).then(res => console.log(res)).catch(e => console.log(e))

        console.log('DATA', this.props.data.token);
        return (
            <div>
                <Link to={}>
            </div>
        );

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

export default Main;

